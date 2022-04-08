!(function(factory) {
    "function" == typeof define && define.amd && define.amd.jQuery ?
        define(["jquery"], factory) :
        factory(
            "undefined" != typeof module && module.exports ?
            require("jquery") :
            jQuery
        );
})(function($) {
    "use strict";

    function init(options) {
        return (!options ||
            void 0 !== options.allowPageScroll ||
            (void 0 === options.swipe && void 0 === options.swipeStatus) ||
            (options.allowPageScroll = NONE),
            void 0 !== options.click &&
            void 0 === options.tap &&
            (options.tap = options.click),
            options || (options = {}),
            (options = $.extend({}, $.fn.swipe.defaults, options)),
            this.each(function() {
                var $this = $(this),
                    plugin = $this.data(PLUGIN_NS);
                plugin ||
                    ((plugin = new TouchSwipe(this, options)),
                        $this.data(PLUGIN_NS, plugin));
            })
        );
    }

    function TouchSwipe(element, options) {
        function touchStart(jqEvent) {
            if (!(
                    getTouchInProgress() ||
                    $(jqEvent.target).closest(options.excludedElements, $element).length >
                    0
                )) {
                var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
                if (!event.pointerType ||
                    "mouse" != event.pointerType ||
                    0 != options.fallbackToMouseEvents
                ) {
                    var ret,
                        touches = event.touches,
                        evt = touches ? touches[0] : event;
                    return (
                        (phase = PHASE_START),
                        touches ?
                        (fingerCount = touches.length) :
                        options.preventDefaultEvents !== !1 && jqEvent.preventDefault(),
                        (distance = 0),
                        (direction = null),
                        (currentDirection = null),
                        (pinchDirection = null),
                        (duration = 0),
                        (startTouchesDistance = 0),
                        (endTouchesDistance = 0),
                        (pinchZoom = 1),
                        (pinchDistance = 0),
                        (maximumsMap = createMaximumsData()),
                        cancelMultiFingerRelease(),
                        createFingerData(0, evt), !touches ||
                        fingerCount === options.fingers ||
                        options.fingers === ALL_FINGERS ||
                        hasPinches() ?
                        ((startTime = getTimeStamp()),
                            2 == fingerCount &&
                            (createFingerData(1, touches[1]),
                                (startTouchesDistance = endTouchesDistance =
                                    calculateTouchesDistance(
                                        fingerData[0].start,
                                        fingerData[1].start
                                    ))),
                            (options.swipeStatus || options.pinchStatus) &&
                            (ret = triggerHandler(event, phase))) :
                        (ret = !1),
                        ret === !1 ?
                        ((phase = PHASE_CANCEL), triggerHandler(event, phase), ret) :
                        (options.hold &&
                            (holdTimeout = setTimeout(
                                $.proxy(function() {
                                    $element.trigger("hold", [event.target]),
                                        options.hold &&
                                        (ret = options.hold.call(
                                            $element,
                                            event,
                                            event.target
                                        ));
                                }, this),
                                options.longTapThreshold
                            )),
                            setTouchInProgress(!0),
                            null)
                    );
                }
            }
        }

        function touchMove(jqEvent) {
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
            if (
                phase !== PHASE_END &&
                phase !== PHASE_CANCEL &&
                !inMultiFingerRelease()
            ) {
                var ret,
                    touches = event.touches,
                    evt = touches ? touches[0] : event,
                    currentFinger = updateFingerData(evt);
                if (
                    ((endTime = getTimeStamp()),
                        touches && (fingerCount = touches.length),
                        options.hold && clearTimeout(holdTimeout),
                        (phase = PHASE_MOVE),
                        2 == fingerCount &&
                        (0 == startTouchesDistance ?
                            (createFingerData(1, touches[1]),
                                (startTouchesDistance = endTouchesDistance =
                                    calculateTouchesDistance(
                                        fingerData[0].start,
                                        fingerData[1].start
                                    ))) :
                            (updateFingerData(touches[1]),
                                (endTouchesDistance = calculateTouchesDistance(
                                    fingerData[0].end,
                                    fingerData[1].end
                                )),
                                (pinchDirection = calculatePinchDirection(
                                    fingerData[0].end,
                                    fingerData[1].end
                                ))),
                            (pinchZoom = calculatePinchZoom(
                                startTouchesDistance,
                                endTouchesDistance
                            )),
                            (pinchDistance = Math.abs(
                                startTouchesDistance - endTouchesDistance
                            ))),
                        fingerCount === options.fingers ||
                        options.fingers === ALL_FINGERS ||
                        !touches ||
                        hasPinches())
                ) {
                    if (
                        ((direction = calculateDirection(
                                currentFinger.start,
                                currentFinger.end
                            )),
                            (currentDirection = calculateDirection(
                                currentFinger.last,
                                currentFinger.end
                            )),
                            validateDefaultEvent(jqEvent, currentDirection),
                            (distance = calculateDistance(
                                currentFinger.start,
                                currentFinger.end
                            )),
                            (duration = calculateDuration()),
                            setMaxDistance(direction, distance),
                            (ret = triggerHandler(event, phase)), !options.triggerOnTouchEnd || options.triggerOnTouchLeave)
                    ) {
                        var inBounds = !0;
                        if (options.triggerOnTouchLeave) {
                            var bounds = getbounds(this);
                            inBounds = isInBounds(currentFinger.end, bounds);
                        }!options.triggerOnTouchEnd && inBounds ?
                            (phase = getNextPhase(PHASE_MOVE)) :
                            options.triggerOnTouchLeave &&
                            !inBounds &&
                            (phase = getNextPhase(PHASE_END)),
                            (phase != PHASE_CANCEL && phase != PHASE_END) ||
                            triggerHandler(event, phase);
                    }
                } else(phase = PHASE_CANCEL), triggerHandler(event, phase);
                ret === !1 && ((phase = PHASE_CANCEL), triggerHandler(event, phase));
            }
        }

        function touchEnd(jqEvent) {
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent,
                touches = event.touches;
            if (touches) {
                if (touches.length && !inMultiFingerRelease())
                    return startMultiFingerRelease(event), !0;
                if (touches.length && inMultiFingerRelease()) return !0;
            }
            return (
                inMultiFingerRelease() && (fingerCount = fingerCountAtRelease),
                (endTime = getTimeStamp()),
                (duration = calculateDuration()),
                didSwipeBackToCancel() || !validateSwipeDistance() ?
                ((phase = PHASE_CANCEL), triggerHandler(event, phase)) :
                options.triggerOnTouchEnd ||
                (options.triggerOnTouchEnd === !1 && phase === PHASE_MOVE) ?
                (options.preventDefaultEvents !== !1 && jqEvent.preventDefault(),
                    (phase = PHASE_END),
                    triggerHandler(event, phase)) :
                !options.triggerOnTouchEnd && hasTap() ?
                ((phase = PHASE_END), triggerHandlerForGesture(event, phase, TAP)) :
                phase === PHASE_MOVE &&
                ((phase = PHASE_CANCEL), triggerHandler(event, phase)),
                setTouchInProgress(!1),
                null
            );
        }

        function touchCancel() {
            (fingerCount = 0),
            (endTime = 0),
            (startTime = 0),
            (startTouchesDistance = 0),
            (endTouchesDistance = 0),
            (pinchZoom = 1),
            cancelMultiFingerRelease(),
                setTouchInProgress(!1);
        }

        function touchLeave(jqEvent) {
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
            options.triggerOnTouchLeave &&
                ((phase = getNextPhase(PHASE_END)), triggerHandler(event, phase));
        }

        function removeListeners() {
            $element.unbind(START_EV, touchStart),
                $element.unbind(CANCEL_EV, touchCancel),
                $element.unbind(MOVE_EV, touchMove),
                $element.unbind(END_EV, touchEnd),
                LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave),
                setTouchInProgress(!1);
        }

        function getNextPhase(currentPhase) {
            var nextPhase = currentPhase,
                validTime = validateSwipeTime(),
                validDistance = validateSwipeDistance(),
                didCancel = didSwipeBackToCancel();
            return (!validTime || didCancel ?
                (nextPhase = PHASE_CANCEL) :
                !validDistance ||
                currentPhase != PHASE_MOVE ||
                (options.triggerOnTouchEnd && !options.triggerOnTouchLeave) ?
                !validDistance &&
                currentPhase == PHASE_END &&
                options.triggerOnTouchLeave &&
                (nextPhase = PHASE_CANCEL) :
                (nextPhase = PHASE_END),
                nextPhase
            );
        }

        function triggerHandler(event, phase) {
            var ret,
                touches = event.touches;
            return (
                (didSwipe() || hasSwipes()) &&
                (ret = triggerHandlerForGesture(event, phase, SWIPE)),
                (didPinch() || hasPinches()) &&
                ret !== !1 &&
                (ret = triggerHandlerForGesture(event, phase, PINCH)),
                didDoubleTap() && ret !== !1 ?
                (ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP)) :
                didLongTap() && ret !== !1 ?
                (ret = triggerHandlerForGesture(event, phase, LONG_TAP)) :
                didTap() &&
                ret !== !1 &&
                (ret = triggerHandlerForGesture(event, phase, TAP)),
                phase === PHASE_CANCEL && touchCancel(event),
                phase === PHASE_END &&
                (touches ? touches.length || touchCancel(event) : touchCancel(event)),
                ret
            );
        }

        function triggerHandlerForGesture(event, phase, gesture) {
            var ret;
            if (gesture == SWIPE) {
                if (
                    ($element.trigger("swipeStatus", [
                            phase,
                            direction || null,
                            distance || 0,
                            duration || 0,
                            fingerCount,
                            fingerData,
                            currentDirection,
                        ]),
                        options.swipeStatus &&
                        ((ret = options.swipeStatus.call(
                                $element,
                                event,
                                phase,
                                direction || null,
                                distance || 0,
                                duration || 0,
                                fingerCount,
                                fingerData,
                                currentDirection
                            )),
                            ret === !1))
                )
                    return !1;
                if (phase == PHASE_END && validateSwipe()) {
                    if (
                        (clearTimeout(singleTapTimeout),
                            clearTimeout(holdTimeout),
                            $element.trigger("swipe", [
                                direction,
                                distance,
                                duration,
                                fingerCount,
                                fingerData,
                                currentDirection,
                            ]),
                            options.swipe &&
                            ((ret = options.swipe.call(
                                    $element,
                                    event,
                                    direction,
                                    distance,
                                    duration,
                                    fingerCount,
                                    fingerData,
                                    currentDirection
                                )),
                                ret === !1))
                    )
                        return !1;
                    switch (direction) {
                        case LEFT:
                            $element.trigger("swipeLeft", [
                                    direction,
                                    distance,
                                    duration,
                                    fingerCount,
                                    fingerData,
                                    currentDirection,
                                ]),
                                options.swipeLeft &&
                                (ret = options.swipeLeft.call(
                                    $element,
                                    event,
                                    direction,
                                    distance,
                                    duration,
                                    fingerCount,
                                    fingerData,
                                    currentDirection
                                ));
                            break;
                        case RIGHT:
                            $element.trigger("swipeRight", [
                                    direction,
                                    distance,
                                    duration,
                                    fingerCount,
                                    fingerData,
                                    currentDirection,
                                ]),
                                options.swipeRight &&
                                (ret = options.swipeRight.call(
                                    $element,
                                    event,
                                    direction,
                                    distance,
                                    duration,
                                    fingerCount,
                                    fingerData,
                                    currentDirection
                                ));
                            break;
                        case UP:
                            $element.trigger("swipeUp", [
                                    direction,
                                    distance,
                                    duration,
                                    fingerCount,
                                    fingerData,
                                    currentDirection,
                                ]),
                                options.swipeUp &&
                                (ret = options.swipeUp.call(
                                    $element,
                                    event,
                                    direction,
                                    distance,
                                    duration,
                                    fingerCount,
                                    fingerData,
                                    currentDirection
                                ));
                            break;
                        case DOWN:
                            $element.trigger("swipeDown", [
                                    direction,
                                    distance,
                                    duration,
                                    fingerCount,
                                    fingerData,
                                    currentDirection,
                                ]),
                                options.swipeDown &&
                                (ret = options.swipeDown.call(
                                    $element,
                                    event,
                                    direction,
                                    distance,
                                    duration,
                                    fingerCount,
                                    fingerData,
                                    currentDirection
                                ));
                    }
                }
            }
            if (gesture == PINCH) {
                if (
                    ($element.trigger("pinchStatus", [
                            phase,
                            pinchDirection || null,
                            pinchDistance || 0,
                            duration || 0,
                            fingerCount,
                            pinchZoom,
                            fingerData,
                        ]),
                        options.pinchStatus &&
                        ((ret = options.pinchStatus.call(
                                $element,
                                event,
                                phase,
                                pinchDirection || null,
                                pinchDistance || 0,
                                duration || 0,
                                fingerCount,
                                pinchZoom,
                                fingerData
                            )),
                            ret === !1))
                )
                    return !1;
                if (phase == PHASE_END && validatePinch())
                    switch (pinchDirection) {
                        case IN:
                            $element.trigger("pinchIn", [
                                    pinchDirection || null,
                                    pinchDistance || 0,
                                    duration || 0,
                                    fingerCount,
                                    pinchZoom,
                                    fingerData,
                                ]),
                                options.pinchIn &&
                                (ret = options.pinchIn.call(
                                    $element,
                                    event,
                                    pinchDirection || null,
                                    pinchDistance || 0,
                                    duration || 0,
                                    fingerCount,
                                    pinchZoom,
                                    fingerData
                                ));
                            break;
                        case OUT:
                            $element.trigger("pinchOut", [
                                    pinchDirection || null,
                                    pinchDistance || 0,
                                    duration || 0,
                                    fingerCount,
                                    pinchZoom,
                                    fingerData,
                                ]),
                                options.pinchOut &&
                                (ret = options.pinchOut.call(
                                    $element,
                                    event,
                                    pinchDirection || null,
                                    pinchDistance || 0,
                                    duration || 0,
                                    fingerCount,
                                    pinchZoom,
                                    fingerData
                                ));
                    }
            }
            return (
                gesture == TAP ?
                (phase !== PHASE_CANCEL && phase !== PHASE_END) ||
                (clearTimeout(singleTapTimeout),
                    clearTimeout(holdTimeout),
                    hasDoubleTap() && !inDoubleTap() ?
                    ((doubleTapStartTime = getTimeStamp()),
                        (singleTapTimeout = setTimeout(
                            $.proxy(function() {
                                (doubleTapStartTime = null),
                                $element.trigger("tap", [event.target]),
                                    options.tap &&
                                    (ret = options.tap.call($element, event, event.target));
                            }, this),
                            options.doubleTapThreshold
                        ))) :
                    ((doubleTapStartTime = null),
                        $element.trigger("tap", [event.target]),
                        options.tap &&
                        (ret = options.tap.call($element, event, event.target)))) :
                gesture == DOUBLE_TAP ?
                (phase !== PHASE_CANCEL && phase !== PHASE_END) ||
                (clearTimeout(singleTapTimeout),
                    clearTimeout(holdTimeout),
                    (doubleTapStartTime = null),
                    $element.trigger("doubletap", [event.target]),
                    options.doubleTap &&
                    (ret = options.doubleTap.call($element, event, event.target))) :
                gesture == LONG_TAP &&
                ((phase !== PHASE_CANCEL && phase !== PHASE_END) ||
                    (clearTimeout(singleTapTimeout),
                        (doubleTapStartTime = null),
                        $element.trigger("longtap", [event.target]),
                        options.longTap &&
                        (ret = options.longTap.call($element, event, event.target)))),
                ret
            );
        }

        function validateSwipeDistance() {
            var valid = !0;
            return (
                null !== options.threshold && (valid = distance >= options.threshold),
                valid
            );
        }

        function didSwipeBackToCancel() {
            var cancelled = !1;
            return (
                null !== options.cancelThreshold &&
                null !== direction &&
                (cancelled =
                    getMaxDistance(direction) - distance >= options.cancelThreshold),
                cancelled
            );
        }

        function validatePinchDistance() {
            return (
                null === options.pinchThreshold ||
                pinchDistance >= options.pinchThreshold
            );
        }

        function validateSwipeTime() {
            var result;
            return (result = !options.maxTimeThreshold || !(duration >= options.maxTimeThreshold));
        }

        function validateDefaultEvent(jqEvent, direction) {
            if (options.preventDefaultEvents !== !1)
                if (options.allowPageScroll === NONE) jqEvent.preventDefault();
                else {
                    var auto = options.allowPageScroll === AUTO;
                    switch (direction) {
                        case LEFT:
                            ((options.swipeLeft && auto) ||
                                (!auto && options.allowPageScroll != HORIZONTAL)) &&
                            jqEvent.preventDefault();
                            break;
                        case RIGHT:
                            ((options.swipeRight && auto) ||
                                (!auto && options.allowPageScroll != HORIZONTAL)) &&
                            jqEvent.preventDefault();
                            break;
                        case UP:
                            ((options.swipeUp && auto) ||
                                (!auto && options.allowPageScroll != VERTICAL)) &&
                            jqEvent.preventDefault();
                            break;
                        case DOWN:
                            ((options.swipeDown && auto) ||
                                (!auto && options.allowPageScroll != VERTICAL)) &&
                            jqEvent.preventDefault();
                            break;
                        case NONE:
                    }
                }
        }

        function validatePinch() {
            var hasCorrectFingerCount = validateFingers(),
                hasEndPoint = validateEndPoint(),
                hasCorrectDistance = validatePinchDistance();
            return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance;
        }

        function hasPinches() {
            return !!(options.pinchStatus || options.pinchIn || options.pinchOut);
        }

        function didPinch() {
            return !(!validatePinch() || !hasPinches());
        }

        function validateSwipe() {
            var hasValidTime = validateSwipeTime(),
                hasValidDistance = validateSwipeDistance(),
                hasCorrectFingerCount = validateFingers(),
                hasEndPoint = validateEndPoint(),
                didCancel = didSwipeBackToCancel(),
                valid = !didCancel &&
                hasEndPoint &&
                hasCorrectFingerCount &&
                hasValidDistance &&
                hasValidTime;
            return valid;
        }

        function hasSwipes() {
            return !!(
                options.swipe ||
                options.swipeStatus ||
                options.swipeLeft ||
                options.swipeRight ||
                options.swipeUp ||
                options.swipeDown
            );
        }

        function didSwipe() {
            return !(!validateSwipe() || !hasSwipes());
        }

        function validateFingers() {
            return (
                fingerCount === options.fingers ||
                options.fingers === ALL_FINGERS ||
                !SUPPORTS_TOUCH
            );
        }

        function validateEndPoint() {
            return 0 !== fingerData[0].end.x;
        }

        function hasTap() {
            return !!options.tap;
        }

        function hasDoubleTap() {
            return !!options.doubleTap;
        }

        function hasLongTap() {
            return !!options.longTap;
        }

        function validateDoubleTap() {
            if (null == doubleTapStartTime) return !1;
            var now = getTimeStamp();
            return (
                hasDoubleTap() && now - doubleTapStartTime <= options.doubleTapThreshold
            );
        }

        function inDoubleTap() {
            return validateDoubleTap();
        }

        function validateTap() {
            return (
                (1 === fingerCount || !SUPPORTS_TOUCH) &&
                (isNaN(distance) || distance < options.threshold)
            );
        }

        function validateLongTap() {
            return (
                duration > options.longTapThreshold && distance < DOUBLE_TAP_THRESHOLD
            );
        }

        function didTap() {
            return !(!validateTap() || !hasTap());
        }

        function didDoubleTap() {
            return !(!validateDoubleTap() || !hasDoubleTap());
        }

        function didLongTap() {
            return !(!validateLongTap() || !hasLongTap());
        }

        function startMultiFingerRelease(event) {
            (previousTouchEndTime = getTimeStamp()),
            (fingerCountAtRelease = event.touches.length + 1);
        }

        function cancelMultiFingerRelease() {
            (previousTouchEndTime = 0), (fingerCountAtRelease = 0);
        }

        function inMultiFingerRelease() {
            var withinThreshold = !1;
            if (previousTouchEndTime) {
                var diff = getTimeStamp() - previousTouchEndTime;
                diff <= options.fingerReleaseThreshold && (withinThreshold = !0);
            }
            return withinThreshold;
        }

        function getTouchInProgress() {
            return !($element.data(PLUGIN_NS + "_intouch") !== !0);
        }

        function setTouchInProgress(val) {
            $element &&
                (val === !0 ?
                    ($element.bind(MOVE_EV, touchMove),
                        $element.bind(END_EV, touchEnd),
                        LEAVE_EV && $element.bind(LEAVE_EV, touchLeave)) :
                    ($element.unbind(MOVE_EV, touchMove, !1),
                        $element.unbind(END_EV, touchEnd, !1),
                        LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave, !1)),
                    $element.data(PLUGIN_NS + "_intouch", val === !0));
        }

        function createFingerData(id, evt) {
            var f = {
                start: { x: 0, y: 0 },
                last: { x: 0, y: 0 },
                end: { x: 0, y: 0 },
            };
            return (
                (f.start.x = f.last.x = f.end.x = evt.pageX || evt.clientX),
                (f.start.y = f.last.y = f.end.y = evt.pageY || evt.clientY),
                (fingerData[id] = f),
                f
            );
        }

        function updateFingerData(evt) {
            var id = void 0 !== evt.identifier ? evt.identifier : 0,
                f = getFingerData(id);
            return (
                null === f && (f = createFingerData(id, evt)),
                (f.last.x = f.end.x),
                (f.last.y = f.end.y),
                (f.end.x = evt.pageX || evt.clientX),
                (f.end.y = evt.pageY || evt.clientY),
                f
            );
        }

        function getFingerData(id) {
            return fingerData[id] || null;
        }

        function setMaxDistance(direction, distance) {
            direction != NONE &&
                ((distance = Math.max(distance, getMaxDistance(direction))),
                    (maximumsMap[direction].distance = distance));
        }

        function getMaxDistance(direction) {
            if (maximumsMap[direction]) return maximumsMap[direction].distance;
        }

        function createMaximumsData() {
            var maxData = {};
            return (
                (maxData[LEFT] = createMaximumVO(LEFT)),
                (maxData[RIGHT] = createMaximumVO(RIGHT)),
                (maxData[UP] = createMaximumVO(UP)),
                (maxData[DOWN] = createMaximumVO(DOWN)),
                maxData
            );
        }

        function createMaximumVO(dir) {
            return { direction: dir, distance: 0 };
        }

        function calculateDuration() {
            return endTime - startTime;
        }

        function calculateTouchesDistance(startPoint, endPoint) {
            var diffX = Math.abs(startPoint.x - endPoint.x),
                diffY = Math.abs(startPoint.y - endPoint.y);
            return Math.round(Math.sqrt(diffX * diffX + diffY * diffY));
        }

        function calculatePinchZoom(startDistance, endDistance) {
            var percent = (endDistance / startDistance) * 1;
            return percent.toFixed(2);
        }

        function calculatePinchDirection() {
            return pinchZoom < 1 ? OUT : IN;
        }

        function calculateDistance(startPoint, endPoint) {
            return Math.round(
                Math.sqrt(
                    Math.pow(endPoint.x - startPoint.x, 2) +
                    Math.pow(endPoint.y - startPoint.y, 2)
                )
            );
        }

        function calculateAngle(startPoint, endPoint) {
            var x = startPoint.x - endPoint.x,
                y = endPoint.y - startPoint.y,
                r = Math.atan2(y, x),
                angle = Math.round((180 * r) / Math.PI);
            return angle < 0 && (angle = 360 - Math.abs(angle)), angle;
        }

        function calculateDirection(startPoint, endPoint) {
            if (comparePoints(startPoint, endPoint)) return NONE;
            var angle = calculateAngle(startPoint, endPoint);
            return angle <= 45 && angle >= 0 ?
                LEFT :
                angle <= 360 && angle >= 315 ?
                LEFT :
                angle >= 135 && angle <= 225 ?
                RIGHT :
                angle > 45 && angle < 135 ?
                DOWN :
                UP;
        }

        function getTimeStamp() {
            var now = new Date();
            return now.getTime();
        }

        function getbounds(el) {
            el = $(el);
            var offset = el.offset(),
                bounds = {
                    left: offset.left,
                    right: offset.left + el.outerWidth(),
                    top: offset.top,
                    bottom: offset.top + el.outerHeight(),
                };
            return bounds;
        }

        function isInBounds(point, bounds) {
            return (
                point.x > bounds.left &&
                point.x < bounds.right &&
                point.y > bounds.top &&
                point.y < bounds.bottom
            );
        }

        function comparePoints(pointA, pointB) {
            return pointA.x == pointB.x && pointA.y == pointB.y;
        }
        var options = $.extend({}, options),
            useTouchEvents =
            SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents,
            START_EV = useTouchEvents ?
            SUPPORTS_POINTER ?
            SUPPORTS_POINTER_IE10 ?
            "MSPointerDown" :
            "pointerdown" :
            "touchstart" :
            "mousedown",
            MOVE_EV = useTouchEvents ?
            SUPPORTS_POINTER ?
            SUPPORTS_POINTER_IE10 ?
            "MSPointerMove" :
            "pointermove" :
            "touchmove" :
            "mousemove",
            END_EV = useTouchEvents ?
            SUPPORTS_POINTER ?
            SUPPORTS_POINTER_IE10 ?
            "MSPointerUp" :
            "pointerup" :
            "touchend" :
            "mouseup",
            LEAVE_EV = useTouchEvents ?
            SUPPORTS_POINTER ?
            "mouseleave" :
            null :
            "mouseleave",
            CANCEL_EV = SUPPORTS_POINTER ?
            SUPPORTS_POINTER_IE10 ?
            "MSPointerCancel" :
            "pointercancel" :
            "touchcancel",
            distance = 0,
            direction = null,
            currentDirection = null,
            duration = 0,
            startTouchesDistance = 0,
            endTouchesDistance = 0,
            pinchZoom = 1,
            pinchDistance = 0,
            pinchDirection = 0,
            maximumsMap = null,
            $element = $(element),
            phase = "start",
            fingerCount = 0,
            fingerData = {},
            startTime = 0,
            endTime = 0,
            previousTouchEndTime = 0,
            fingerCountAtRelease = 0,
            doubleTapStartTime = 0,
            singleTapTimeout = null,
            holdTimeout = null;
        try {
            $element.bind(START_EV, touchStart),
                $element.bind(CANCEL_EV, touchCancel);
        } catch (e) {
            $.error(
                "events not supported " +
                START_EV +
                "," +
                CANCEL_EV +
                " on jQuery.swipe"
            );
        }
        (this.enable = function() {
            return (
                this.disable(),
                $element.bind(START_EV, touchStart),
                $element.bind(CANCEL_EV, touchCancel),
                $element
            );
        }),
        (this.disable = function() {
            return removeListeners(), $element;
        }),
        (this.destroy = function() {
            removeListeners(), $element.data(PLUGIN_NS, null), ($element = null);
        }),
        (this.option = function(property, value) {
            if ("object" == typeof property) options = $.extend(options, property);
            else if (void 0 !== options[property]) {
                if (void 0 === value) return options[property];
                options[property] = value;
            } else {
                if (!property) return options;
                $.error(
                    "Option " + property + " does not exist on jQuery.swipe.options"
                );
            }
            return null;
        });
    }
    var VERSION = "1.6.18",
        LEFT = "left",
        RIGHT = "right",
        UP = "up",
        DOWN = "down",
        IN = "in",
        OUT = "out",
        NONE = "none",
        AUTO = "auto",
        SWIPE = "swipe",
        PINCH = "pinch",
        TAP = "tap",
        DOUBLE_TAP = "doubletap",
        LONG_TAP = "longtap",
        HORIZONTAL = "horizontal",
        VERTICAL = "vertical",
        ALL_FINGERS = "all",
        DOUBLE_TAP_THRESHOLD = 10,
        PHASE_START = "start",
        PHASE_MOVE = "move",
        PHASE_END = "end",
        PHASE_CANCEL = "cancel",
        SUPPORTS_TOUCH = "ontouchstart" in window,
        SUPPORTS_POINTER_IE10 =
        window.navigator.msPointerEnabled &&
        !window.PointerEvent &&
        !SUPPORTS_TOUCH,
        SUPPORTS_POINTER =
        (window.PointerEvent || window.navigator.msPointerEnabled) &&
        !SUPPORTS_TOUCH,
        PLUGIN_NS = "TouchSwipe",
        defaults = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null,
            pinchThreshold: 20,
            maxTimeThreshold: null,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            pinchIn: null,
            pinchOut: null,
            pinchStatus: null,
            click: null,
            tap: null,
            doubleTap: null,
            longTap: null,
            hold: null,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: ".noSwipe",
            preventDefaultEvents: !0,
        };
    ($.fn.swipe = function(method) {
        var $this = $(this),
            plugin = $this.data(PLUGIN_NS);
        if (plugin && "string" == typeof method) {
            if (plugin[method])
                return plugin[method].apply(
                    plugin,
                    Array.prototype.slice.call(arguments, 1)
                );
            $.error("Method " + method + " does not exist on jQuery.swipe");
        } else if (plugin && "object" == typeof method)
            plugin.option.apply(plugin, arguments);
        else if (!(plugin || ("object" != typeof method && method)))
            return init.apply(this, arguments);
        return $this;
    }),
    ($.fn.swipe.version = VERSION),
    ($.fn.swipe.defaults = defaults),
    ($.fn.swipe.phases = {
        PHASE_START: PHASE_START,
        PHASE_MOVE: PHASE_MOVE,
        PHASE_END: PHASE_END,
        PHASE_CANCEL: PHASE_CANCEL,
    }),
    ($.fn.swipe.directions = {
        LEFT: LEFT,
        RIGHT: RIGHT,
        UP: UP,
        DOWN: DOWN,
        IN: IN,
        OUT: OUT,
    }),
    ($.fn.swipe.pageScroll = {
        NONE: NONE,
        HORIZONTAL: HORIZONTAL,
        VERTICAL: VERTICAL,
        AUTO: AUTO,
    }),
    ($.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
        ALL: ALL_FINGERS,
    });
});

var focusableElements = new Function();
focusableElements.fn = focusableElements.__proto__ = {
    target: "body",
    focusable: 'a:not([disabled]), button:not([disabled]), input[type="text"]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])',
    init: function() {
        (null === this.elements || this.elements.length < 0) &&
        (this.elements = $(this.target)
            .find(this.focusable)
            .map(function() {
                var e = $(this);
                if ("none" === e.css("display")) return null;
                for (; e[0].constructor !== Window && e[0].constructor !== HTMLDocument;

                ) {
                    if ("none" === e.css("display")) return null;
                    e = e.parent();
                }
                return this;
            }));
    },
    reset: function() {
        (this.elements = null), this.init();
    },
    elements: null,
    getElement: function(e) {
        for (var t = 0; t < this.elements.length; t++)
            if (this.compare(this.elements.eq(t), e))
                return { element: this.elements.eq(t), index: t };
        return { element: void 0, index: -1 };
    },
    getElementByIndex: function(e) {
        return e >= this.elements.length ? void 0 : this.elements.eq(e);
    },
    next: function(e) {
        e = (e = this.getElement(e).index) + 1 >= this.elements.length ? e : e + 1;
        return this.getElementByIndex(e);
    },
    prev: function(e) {
        e = (e = this.getElement(e).index) - 1 < 0 ? e : e - 1;
        return this.getElementByIndex(e);
    },
    compare: function(e, t) {
        for (var n = 0; n < t.length; n++)
            if (e.get(0) === t.get(n)) return !0;
        return !1;
    },
};
var fe = focusableElements.fn;

$(window).on("load", onLoad).on("scroll", onScroll).on("resize", onResize);

$(function() {
    $.fn.jtoa = function() {
        return this.map(function() {
            return $(this);
        }).toArray();
    };
});

$(function() {
    // KV
    $(".kv_wrap .kv_btn").on("click", "button", function() {
        var btn = $(this),
            dir = btn.is(".prev") ? -1 : 1,
            idx = $(".kv_wrap .kv_img .active").index() + dir;

        if (btn.is(".play")) {
            var status;
            if (btn.is(".paused")) {
                btn.removeClass("paused");
                autoKVStart();
                status = "정지";
            } else {
                btn.addClass("paused");
                autoKVStop();
                status = "재생";
            }
            btn.attr("title", "슬라이드 " + status + " 하기");
        } else {
            slideKV(idx);
        }
    });
    $(".kv_wrap").swipe({
        swipeStatus: function(e, p, dr, ds, du, f, fd, cd) {
            var kv = $(".kv_wrap");

            if (kv.is(".sliding")) return;

            if (p === "start") {
                autoKVStop();
            } else {
                if (!!p.match("cancel|end")) {
                    kv.removeClass("swiping");
                    kv.removeData("scroll");
                    if (p === "end") {
                        if (!!dr.match("right|down")) {
                            $(".kv_wrap .kv_btn .prev").click();
                        } else {
                            $(".kv_wrap .kv_btn .next").click();
                        }
                    } else {
                        if (!$(".kv_wrap .kv_btn .play").is(".paused")) {
                            autoKVStart();
                        }
                    }
                } else {
                    if (!kv.is(".swiping")) {
                        kv.addClass("swiping");
                    }
                    if (!!!kv_link_delay) {
                        kv_link_delay = setTimeout(function() {
                            kv_link_delay = null;
                        }, 1000);
                    }

                    if (!!dr.match("left|right")) {
                        kv.data("scroll", "disable");
                    } else {
                        kv.data("scroll", "enable");
                    }
                }
            }
        },
        triggerOnTouchLeave: true,
        allowPageScroll: "vertical",
        excludedElements: $.fn.swipe.defaults.excludedElements + ", .kv_wrap .kv_btn",
    });
    $(".kv_wrap .kv_cont").on("touchmove", function() {
        if ($(".kv_wrap").data("scroll") === "disable") {
            return false;
        }
    });
    $(".kv_wrap .kv_cont").on("click", "a[href]", function() {
        var kv = $(".kv_wrap");
        if (kv.is(".sliding") || kv.is(".swiping") || kv_link_delay) {
            return false;
        }
    });
});

$(function() {
    // About - Product
    $(".about_wrap .product .pager").on("click", "button", function() {
        var btn = $(this),
            idx = $(this).parent().index();

        slideProduct(idx);
    });
    $(".about_wrap .product").swipe({
        swipeStatus: function(e, p, dr, ds, du, f, fd, cd) {
            var pdt = $(".about_wrap .product");
            if (p === "start" && !pdt.is(".sliding")) {
                pdt.addClass("swiping");
            } else if (pdt.is(".swiping")) {
                if (!!p.match("cancel|end")) {
                    pdt.removeClass("swiping");
                    pdt.removeData("scroll");
                    if (p === "end") {
                        var dir = !!dr.match("right|down") ? -1 : 1,
                            idx = $(".about_wrap .product .pager .active").index() + dir;

                        slideProduct(idx);
                    }
                } else {
                    if (!!!pdt_link_delay) {
                        pdt_link_delay = setTimeout(function() {
                            pdt_link_delay = null;
                        }, 1000);
                    }

                    if (!!dr.match("left|right")) {
                        pdt.data("scroll", "disable");
                    } else {
                        pdt.data("scroll", "enable");
                    }
                }
            }
        },
        triggerOnTouchLeave: true,
        allowPageScroll: "vertical",
    });
    $(".about_wrap .product").on("touchmove", function() {
        if ($(".about_wrap .product").data("scroll") === "disable") {
            return false;
        }
    });
    $(".about_wrap .product").on("click", "a[href]", function() {
        var pdt = $(".about_wrap .product");
        if (pdt.is(".sliding") || pdt.is(".swiping") || pdt_link_delay) {
            return false;
        }
    });
});

$(function() {
    // Tab
    $(".kv_wrap .kv_img li").on("focus", "a", function() {
        if (!$(this).parent().is(".active")) {
            $(this).parents(".kv_img").find(".active a").focus();
            return false;
        }
    });
    $(".kv_wrap .kv_img li").on("keydown", "a", function(e) {
        if (e.keyCode === 9) {
            if ($(this).parent().is(".active")) {
                if (!e.shiftKey) {
                    if (page === "pc") {
                        $(".kv_wrap .kv_btn .prev").focus();
                    } else {
                        $(".kv_wrap .kv_btn .play").focus();
                    }
                    return false;
                } else {
                    fe.prev(
                        fe.getElement($(".kv_wrap .kv_img li:nth-child(1) a")).element
                    ).focus();
                    return false;
                }
            } else {
                $(".kv_wrap .kv_img .active a").focus();
                return false;
            }
        }
    });
    $(".kv_wrap .kv_btn").on("keydown", "button", function(e) {
        if (e.keyCode === 9) {
            if ($(this).is(".prev") && e.shiftKey && page === "pc") {
                $(".kv_wrap .kv_img .active a").focus();
                return false;
            }

            if ($(this).is(".next") && !e.shiftKey && page === "pc") {
                $(".kv_wrap .kv_btn .play").focus();
                return false;
            }

            if ($(this).is(".play") && !e.shiftKey && page === "pc") {
                $(".kv_wrap .kv_link a").first().focus();
                return false;
            }

            if ($(this).is(".play") && e.shiftKey && page === "pc") {
                $(".kv_wrap .kv_btn .next").focus();
                return false;
            }
        }
    });
    $(".kv_wrap .kv_link").on("keydown", "a", function(e) {
        if (e.keyCode === 9) {
            if ($(this).parent().index() === 0 && e.shiftKey && page === "pc") {
                $(".kv_wrap .kv_btn .play").focus();
                return false;
            }
        }
    });
    $(".about_wrap .product > ul:nth-child(1) li").on("focus", "a", function() {
        if (page === "m") {
            var act = $(".about_wrap .product .pager .active").index();
            if ($(this).parent().index() !== act) {
                $(this)
                    .parents(".product")
                    .find("> ul:nth-child(1) li")
                    .eq(act)
                    .find("a")
                    .focus();
                return false;
            }
        }
    });
    $(".about_wrap .product > ul:nth-child(1) li").on(
        "keydown",
        "a",
        function(e) {
            if (page === "m" && e.keyCode === 9) {
                var act = $(".about_wrap .product .pager .active").index();
                if ($(this).parent().index() === act) {
                    if (!e.shiftKey) {
                        $(".about_wrap .product .pager li:nth-child(1) button").focus();
                        return false;
                    } else {
                        fe.prev(
                            fe.getElement(
                                $(".about_wrap .product > ul:nth-child(1) li:nth-child(1) a")
                            ).element
                        ).focus();
                        return false;
                    }
                } else {
                    $(".about_wrap .product > ul:nth-child(1) .active a").focus();
                    return false;
                }
            }
        }
    );
});

//Public
var winTop = null,
    winHeight = null;
var page = null,
    prevPage = null;
var autoKV = false,
    autoKV_timer = null,
    kv_link_delay = null,
    kv_default_color = ["W", "W"];
var pdt_link_delay = null;

//Definition
function onLoad() {
    (winTop = $(window).scrollTop()), (winHeight = $(window).prop("innerHeight"));
    page = prevPage = $(window).prop("innerWidth") > 768 ? "pc" : "m";

    $(".kv_wrap .kv_img > li").eq(0).addClass("active");
    $(".kv_wrap .kv_txt > li").eq(0).css({ display: "block", opacity: 1 });

    autoKVOn();

    fe.init();

    onScroll();
}

function onScroll() {
    winTop = $(window).scrollTop();
}

function onResize() {
    (winTop = $(window).scrollTop()), (winHeight = $(window).prop("innerHeight"));

    page = $(window).prop("innerWidth") > 768 ? "pc" : "m";
    if (page !== prevPage) {
        if (page === "pc") {
            $(".about_wrap .product").swipe("disable");
            $(".about_wrap .product > ul:nth-child(1)").stop().removeAttr("style");
        } else if (page === "m") {
            $(".about_wrap .product").swipe("enable");
            $(".about_wrap .product > ul:nth-child(1)")
                .stop()
                .css({
                    "margin-left":
                        -$(".about_wrap .product > ul.pager > li.active").index() * 100 +
                        "%",
                });
        }

        setColorKV();

        if (!!autoKV_timer) {
            autoKVReset();
        }
    }
    prevPage = page;

    fe.reset();

    onScroll();
}

//Method
function slideKV(idx) {
    var img = $(".kv_wrap .kv_img").find("li"),
        color = $(".kv_wrap .kv_color").find("li"),
        text = $(".kv_wrap .kv_txt").find("li"),
        news = $(".kv_wrap .kv_link");
    var act = img.parent().find(".active").index();

    //단방향
    //if (($('.kv_wrap').is('.sliding')) || (idx < 0) || (idx >= $('.kv_wrap .kv_img li').length) || (idx === act)) { return; }
    //양방향
    if ($(".kv_wrap").is(".sliding") || idx === act) {
        return;
    }
    if (idx < 0) {
        idx = $(".kv_wrap .kv_img li").length - 1;
    } else if (idx >= $(".kv_wrap .kv_img li").length) {
        idx = 0;
    }

    $(".kv_wrap").addClass("sliding");

    img.eq(act).removeClass("active");
    img.eq(idx).addClass("active");
    $(".kv_wrap .kv_btn .current").text(idx + 1 < 10 ? "0" + (idx + 1) : idx + 1);

    var duration = 500;
    img
        .eq(idx)
        .stop()
        .css({ display: "block" })
        .animate({ opacity: 1 }, duration);
    img
        .eq(act)
        .stop()
        .animate({ opacity: 0 }, duration, function() {
            if (act > 0) {
                img.eq(act).css({ display: "none" });
            }
        });
    color.eq(act).stop().animate({ opacity: 0 }, duration);
    color.eq(idx).stop().animate({ opacity: 1 }, duration);
    news.stop().css({ opacity: 0 }).animate({ opacity: 1 }, duration);
    text.eq(act).animate({ opacity: 0 }, 0, function() {
            text.eq(act).css({ display: "none" });
        }),
        setColorKV(idx);
    text
        .eq(idx)
        .stop()
        .css({ display: "block" })
        .animate({ opacity: 1 }, duration, function() {
            $(".kv_wrap").removeClass("sliding");

            if (!$(".kv_wrap .kv_btn .play").is(".paused")) {
                autoKVReset();
            } else {
                autoKVClear();
            }
        });
}

function setColorKV(idx) {
    var text = $(".kv_wrap .kv_txt li"),
        idx = !!idx ? idx : $(".kv_wrap .kv_img .active").index();
    var themeBlack = $(".kv_wrap").is(".theme_black"),
        colorSet = !!text.eq(idx).attr("data-color") ?
        text.eq(idx).attr("data-color").split(" ") :
        kv_default_color,
        colorIdx = page === "pc" ? 0 : 1;
    if (themeBlack && colorSet[colorIdx] === "W") {
        $(".kv_wrap").removeClass("theme_black_s");
        $(".kv_wrap").removeClass("theme_black");
    } else if (!themeBlack && colorSet[colorIdx] === "B") {
        $(".kv_wrap").removeClass("theme_black_s");
        $(".kv_wrap").addClass("theme_black");
    } else {
        $(".kv_wrap").removeClass("theme_black_s");
    }
    if (colorSet[colorIdx] === "S") {
        $(".kv_wrap").removeClass("theme_black");
        $(".kv_wrap").addClass("theme_black_s");
    }
}

function autoSlideKV(t) {
    var kv = $(".kv_wrap");
    if (!autoKV) return;
    if (t === "start" && !!!autoKV_timer) {
        var timer,
            date = new Date();
        if (!!kv.data("timeBegin") && !!kv.data("timeEnd")) {
            timer = kv.data("timeEnd").getTime() - kv.data("timeBegin").getTime();
        } else {
            timer = 1000 * 5;
        }
        kv.data("timeBegin", date),
            kv.data("timeEnd", new Date(date.getTime() + timer));

        //console.log('KV 자동 재생: ' + (timer / 1000) + '초 후 슬라이드 전환');
        autoKV_timer = setTimeout(function() {
            $(".kv_wrap .kv_btn .next").click();
        }, timer);
    } else if (t === "stop" && !!autoKV_timer) {
        kv.data("timeBegin", new Date());
        clearTimeout(autoKV_timer);
        autoKV_timer = null;

        var timer = kv.data("timeEnd").getTime() - kv.data("timeBegin").getTime();
        //console.log('KV 자동 재생 멈춤: ' + (timer / 1000) + '초 남음');
    } else if (t === "clear") {
        kv.removeData("timeBegin"), kv.removeData("timeEnd");
        clearTimeout(autoKV_timer);
        autoKV_timer = null;
    } else if (t === "reset") {
        autoKVClear();
        autoKVStart();
    }
}

function autoKVOn() {
    (autoKV = true), autoKVStart();
}

function autoKVOff() {
    autoKVStop(), (autoKV = false);
}

function autoKVStart() {
    autoSlideKV("start");
}

function autoKVStop() {
    autoSlideKV("stop");
}

function autoKVClear() {
    autoSlideKV("clear");
}

function autoKVReset() {
    autoSlideKV("reset");
}

function slideProduct(idx) {
    var slide = $(".about_wrap .product > ul:nth-child(1)"),
        pager = $(".about_wrap .pager");
    var act = pager.find(".active").index();

    if (
        page !== "m" ||
        $(".about_wrap .product").is(".sliding") ||
        idx < 0 ||
        idx >= slide.find("li").length ||
        idx === act
    ) {
        return;
    }

    $(".about_wrap .product").addClass("sliding");

    pager.find("li").eq(act).removeClass("active");
    pager.find("li").eq(idx).addClass("active");

    slide.stop().animate({ "margin-left": -idx * 100 + "%" }, 300, function() {
        $(".about_wrap .product").removeClass("sliding");
    });
}

// 메인 News dotdotdot
$(function() {
    $(window).on("load resize", function() {
        $(".about_wrap")
            .find(".company > ul > li > a > p")
            .each(function() {
                var lineHeight =
                    parseFloat(getComputedStyle(this).getPropertyValue("line-height")) *
                    4 +
                    10;
                var br = $(this).find("br");
                $(this).trigger("destroy");
                $(this).dotdotdot({
                    ellipsis: "...",
                    height: lineHeight,
                });
                $(this)
                    .find("br")
                    .each(function(i) {
                        this.className = br.get(i).className;
                    });
            });
    });
});
/** 비동기 처리에 대한 예외 처리 (2) */
const data = [1, 2, 3];

// timer처리와 같은 비동기 방식의 예외처리는 콜백함수 내부에서 처리해야 한다.
setTimeout(() => {
    try {
    // ---- 이 부분만 별로의 구역에서 실행되므로 에러가 발생하더라도 try의 영향을 받지 않는다.
    console.log("배열탐색시작");
    for (let i=0; i < 10; i++) {
        console.log(data[i].toFixed(2));
      }
    } catch (err) {
        // setTimeout()과 같은 비동기 함수는 처리하지 못하기 때문에 이 블록은 실행되지 않는다.
        console.log('에러발생(2)');
        console.error(err.name);
        console.error(err.message);
    }
    // 에러가 발생하여 프로그램이 중단되므로 이 메시지는 표시되지 않는다.
    console.log('배열탐색종료');
}, 1000);

console.log("프로그램 종료");


const pending = (state, { payload }) => {
  return { ...state, loading: true };
};

const fulfilled = (state, { payload }) => {
  return {
    data: payload?.data,
    loading: false,
    error: null,
  };
};

const rejected = (state, { payload }) => {
  return {
    ...state,
    loading: false,
    error: {
      conde: payload?.data.rt
        ? payload.data.rt
        : payload?.status
        ? payload.status
        : 500,
      message: payload?.data?.rtmsg
        ? payload.data?.rtmsg
        : payload?.statusText
        ? payload.statusText
        : "Server error",
    },
  };
};

export { pending, fulfilled, rejected };

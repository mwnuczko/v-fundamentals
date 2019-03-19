const api = {
  ajaxCall() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 600);
    });
  },
};

export default api;

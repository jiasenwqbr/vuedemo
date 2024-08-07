const query = (interval = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, interval);
  });
};

const API = {
  query,
};

export default API;

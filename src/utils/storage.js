export const get = (key) => {
  console.log(global.isServer);
  return localStorage.getItem(key);
};

export const set = (key, value) => {
  localStorage.setItem(key, value);
};

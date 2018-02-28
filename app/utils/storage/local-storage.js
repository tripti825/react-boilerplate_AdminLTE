export const localStorageAdapter = {
  getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  },

  removeItem(key) {
    localStorage.removeItem(key);
  },

  setItem(key, value = true) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

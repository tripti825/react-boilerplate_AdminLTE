export const sessionStorageAdapter = {
  getItem(key) {
    return JSON.parse(sessionStorage.getItem(key));
  },

  removeItem(key) {
    sessionStorage.removeItem(key);
  },

  setItem(key, value = true) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
};

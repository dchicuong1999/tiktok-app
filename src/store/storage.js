import { LOCAL_STORAGE_DEFAULT } from "./constants";

export const storage = {
  set(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    return JSON.parse(localStorage.getItem(key)) ?? LOCAL_STORAGE_DEFAULT;
  },
  remove(key) {
    return localStorage.removeItem(key);
  },
};

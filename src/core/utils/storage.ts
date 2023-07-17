import { getAuthTokenKey } from "./auth";

const get = async (key: string) => {
  try {
    if (!key) return '';
    return await localStorage.getItem(key);
  } catch (error) {
    console.log('Error getting item from storage', error);
  }
};

const set = async (key: string, value: string) => {
  try {
    if (!key) return;
    await localStorage.setItem(key, value);
  } catch (error) {
    console.log('Error saving item to storage', error);
  }
};

const remove = async (key: string) => {
  try {
    if (!key) return;
    await localStorage.removeItem(key);
  } catch (error) {
    console.log('Error removing item from storage', error);
  }
};

const getToken = async () => {
  return await get(getAuthTokenKey());
};

const storeToken = async (authToken: string) => {
  await set(getAuthTokenKey(), authToken);
};

const removeToken = async () => {
  await remove(getAuthTokenKey());
};

const storage = { get, set, remove, getToken, removeToken, storeToken };
export default storage
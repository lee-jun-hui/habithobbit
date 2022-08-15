import * as SecureStore from "expo-secure-store";

const saveUser = async (value) => {
  return await SecureStore.setItemAsync("user", value);
};

const getUser = async () => {
  return await SecureStore.getItemAsync("user");
};

const removeUser = async () => {
  return await SecureStore.deleteItemAsync("user");
};

export { saveUser, getUser, removeUser };

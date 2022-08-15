import * as SecureStore from "expo-secure-store";

const saveUser = async (value) => {
  return SecureStore.setItemAsync("user", value);
};

const getUser = async () => {
  return SecureStore.getItemAsync("user");
};

const removeUser = async () => {
  return SecureStore.deleteItemAsync("user");
};

export { saveUser, getUser, removeUser };

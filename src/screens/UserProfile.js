import { View, Text } from "react-native";
import React, { useContext } from "react";
import Button from "../components/loginButton";
import { AuthContext } from "../contexts/AuthContext";
import { removeUser } from "../utils/securestore.utils";

const UserProfile = () => {
  const { authcontext } = useContext(AuthContext);
  return (
    <View>
      <Text>UserProfile</Text>
      <Button
        mode="contained"
        onPress={() => {
          authcontext.logOut();
        }}
      >
        Log Out
      </Button>
    </View>
  );
};

export default UserProfile;


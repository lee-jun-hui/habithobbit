import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Button } from "react-native-paper";
import { AuthContext } from "../contexts/AuthContext";
import { removeUser } from "../utils/securestore.utils";

const Dashboard = () => {
  const { setIsLoggedIn } = useContext(AuthContext);

  const logout = async () => {
    await removeUser;
    setIsLoggedIn(false);
  };

  return (
    <View>
      <Text>Dashboard</Text>
      <Button
        mode="contained"
        onPress={() => {
          logout();
        }}
      >
        Log Out
      </Button>
    </View>
  );
};

export default Dashboard;

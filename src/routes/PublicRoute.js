import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Registration from "../screens/Registration";
import Login from "../screens/Login";

const Stack = createStackNavigator();

const PublicRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={Registration} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default PublicRoute;

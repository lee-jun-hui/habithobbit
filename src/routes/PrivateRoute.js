import React from "react";
import Dashboard from "../screens/Dashboard";
import HabitOverview from "../screens/HabitOverview";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const PrivateRoute = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Habits" component={HabitOverview} />
    </Tab.Navigator>
  );
};

export default PrivateRoute;

import React from "react";
import Dashboard from "../screens/Dashboardtemp";
// import Dashboard from "../screens/Dashboard";
import HabitOverview from "../screens/HabitOverview";
import PersonalHabit from "../screens/PersonalHabit";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const PrivateRoute = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Habits" component={HabitOverview} />
      <Tab.Screen name="PersonalHabit" component={PersonalHabit} />
    </Tab.Navigator>
  );
};

export default PrivateRoute;

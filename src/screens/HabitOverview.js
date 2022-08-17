import { View, Text } from "react-native";
import React, { useEffect } from "react";
import axiosConn from "../api/config";

const HabitOverview = () => {
  const url = "/api/v1/habits";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosConn.get(url);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>HabitOverview</Text>
    </View>
  );
};

export default HabitOverview;

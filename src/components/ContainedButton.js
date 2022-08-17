import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const ContainedButton = ({ title, icon, onPress }) => {
  return (
    <Button mode="contained" icon={icon} onPress={onPress}>
      {title}
    </Button>
  );
};

export default ContainedButton;

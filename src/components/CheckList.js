import React from "react";
import { Checkbox } from "react-native-paper";

const CheckList = ({ label, status, onPress }) => {
  <Checkbox.Item label={label} status={status} onPress={onPress} />;
};

export default CheckList;

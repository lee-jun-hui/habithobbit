import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

const Inputbox = ({
  label,
  value,
  placeholder,
  onChangeText,
  leftIcon,
  keyboard,
}) => {
  return (
    <TextInput
      mode="outlined"
      label={label}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      left={<TextInput.Icon name={leftIcon} />}
      keyboard={keyboard}
    />
  );
};

export default Inputbox;

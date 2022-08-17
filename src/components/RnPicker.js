import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";

const RnPicker = ({ selectedValue, onValueChange, itemsArray }) => {
  return (
    <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
      {itemsArray.map((item) => (
        <Picker.Item key={item.value} label={item.label} value={item.value} />
      ))}
    </Picker>
  );
};

export default RnPicker;

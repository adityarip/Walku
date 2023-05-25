import { View, Text, TextInput } from "react-native";
import React from "react";

const Input = ({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) => {
  return (
    <View className="mt-4">
      <TextInput
        className={`py-2 px-6 border-b placeholder-[#84848f] border-[#84848f] ${
          isInvalid ? "bg-red" : "bg-white"
        }`}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        placeholder={label}
      />
    </View>
  );
};

export default Input;

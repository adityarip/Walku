import { View, Text, Pressable } from "react-native";
import React from "react";

const Button = ({ children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      className="py-3 px-8  bg-primary justify-center items-center"
    >
      <View>
        <Text className="justify-center text-white text-lg font-semibold">
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;

import { View, Text, Pressable } from "react-native";
import React from "react";

const FlatButton = ({ children, onPress }) => {
  return (
    <Pressable className="py-1 px-12 items-center" onPress={onPress}>
      <View>
        <Text className="justify-center text-secondary font-semibold">
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default FlatButton;

import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const MenuContainer = ({ title, imageSrc, type, setType, bgColor }) => {
  return (
    <TouchableOpacity className="items-center justify-center space-y-2">
      <View
        className={`w-14 h-14 shadow-sm rounded-full items-center justify-center ${
          type === title.toLowerCase() ? bgColor : bgColor
        }`}
      >
        <Image source={imageSrc} className="w-8 h-8" />
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;

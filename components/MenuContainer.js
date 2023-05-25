import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MenuContainer = ({ title, imageSrc, setType, bgColor }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Explore");
  };

  return (
    <TouchableOpacity className="items-center justify-center space-y-2">
      <View
        className={`w-14 h-14 shadow-sm rounded-full items-center justify-center ${bgColor}`}
      >
        <Image source={imageSrc} className="w-8 h-8" />
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;

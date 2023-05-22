import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";

const ItemCardContainer = ({ imageSrc, title }) => {
  return (
    <TouchableOpacity className="rounded-md space-y-2 px-3 py-2 w-[182px] my-2">
      <ImageBackground
        source={imageSrc}
        className="w-32 h-32 justify-end items-start rounded-full"
      >
        <Text className="text-white text-xl font-bold px-1">
          {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;

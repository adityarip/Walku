import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const ExploreCardContainer = ({ imageSrc, title, location, data }) => {
  return (
    <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[182px] my-2">
      <Image
        source={{ uri: imageSrc }}
        className="w-full h-40 rounded-md object-cover"
      />
      {title ? (
        <>
          <Text className="text-primary tex-[18px] font-bold">
            {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
          </Text>

          <Text className="text-primary text-[14px] font-bold">
            {location?.length > 18 ? `${title.slice(0, 18)}..` : location}
          </Text>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

export default ExploreCardContainer;

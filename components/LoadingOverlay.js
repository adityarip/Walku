import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

const LoadingOverlay = ({ message }) => {
  return (
    <View className="flex-1 justify-center items-center p-32 bg-white">
      <Text className="text-lg mb-12">{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingOverlay;

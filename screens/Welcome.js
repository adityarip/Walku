import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { WelcomeBG } from "../assets";

const Welcome = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ImageBackground className="flex-1 w-screen h-screen" source={WelcomeBG}>
      {/* First Section */}
      <View className="flex-row px-6 mt-10 items-center space-x-2">
        <Text className="text-red text-xl font-bold">LET'S GO!</Text>
      </View>

      {/* Separator */}
      <View className="mt-2 h-0.5 bg-primary w-7/12"></View>

      {/* Second Section */}
      <View className="px-6 mt-10 items-start">
        <Text className="text-5xl font-semibold">Hello,</Text>
        <Text className="text-5xl font-semibold">John Doe!</Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Landing")}
        className="flex-1 relative items-center justify-center"
      >
        <Animatable.View
          animation={"pulse"}
          easing={"ease-in-out"}
          iterationCount={"infinite"}
          className="absolute items-center justify-center bottom-10 w-10/12 h-16 bg-black opacity-50 rounded-xl"
        >
          <Text className="text-white font-semibold text-xl">CHOOSE CITY</Text>
        </Animatable.View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Welcome;

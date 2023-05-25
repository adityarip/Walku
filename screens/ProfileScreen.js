import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import { ProfileContext } from "../store/profile-context";

const ProfileScreen = () => {
  const profCtx = useContext(ProfileContext);

  function checkPhoto() {
    if (!profCtx.photo) {
      return "https://firebasestorage.googleapis.com/v0/b/walku-387420.appspot.com/o/BlankProf.png?alt=media&token=e2bb5a80-de0c-41f6-96fd-c4f02e2fa3a1";
    } else {
      return profCtx.photo;
    }
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image
        className="w-12 h-12"
        source={{
          uri: checkPhoto(),
        }}
      />
      <Text>Name</Text>
      <Text>{profCtx.name}</Text>
      <Text>Email</Text>
      <Text>{profCtx.email}</Text>
    </View>
  );
};

export default ProfileScreen;

import React, { useContext, useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import AuthContent from "../components/auth/AuthContent";

import { Walku } from "../assets";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/LoadingOverlay";
import { AuthContext } from "../store/auth-context";

const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not create user, please check your input and try again later!"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return (
    <View className="flex-1 bg-white">
      <View className="items-center justify-center">
        <Image source={Walku} className="h-48 w-48" />
        <Text className="text-4xl">Create Account</Text>
        <Text className="mt-5 text-lg italic">Welcome,</Text>
        <Text className="text-lg italic">
          Sign up to start your meditation routine
        </Text>
      </View>
      <AuthContent onAuthenticate={signupHandler} />
    </View>
  );
};

export default SignupScreen;

import React, { useContext, useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import AuthContent from "../components/auth/AuthContent";
import { useNavigation } from "@react-navigation/native";

import { Walku } from "../assets";
import { login } from "../util/auth";
import LoadingOverlay from "../components/LoadingOverlay";
import { AuthContext } from "../store/auth-context";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credentials or try again later!"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return (
    <View className="flex-1 bg-white">
      <View className="items-center justify-center">
        <Image source={Walku} className="h-48 w-48" />
        <Text className="text-4xl">Log in</Text>
        <Text className="mt-5 text-lg italic">Welcome back,</Text>
        <Text className="text-lg italic">
          Log in to enjoy your meditation days
        </Text>
      </View>
      <AuthContent isLogin onAuthenticate={loginHandler} />
    </View>
  );
};

export default LoginScreen;

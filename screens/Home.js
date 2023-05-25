import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useContext, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MenuContainer from "../components/MenuContainer";
import {
  Cafe,
  Food,
  GLoc,
  Landmark,
  Map,
  Museum,
  MuseumCard,
  Search,
  Shopping,
} from "../assets";
import ItemCardContainer from "../components/ItemCardContainer";
import { AuthContext } from "../store/auth-context";
import { LocContext } from "../store/loc-context";

const Home = () => {
  const navigation = useNavigation();

  const [type, setType] = useState("hotels");

  const authCtx = useContext(AuthContext);
  const locCtx = useContext(LocContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row mt-10 items-center px-8">
        <View>
          <Image source={GLoc} className="h-8 w-8" />
        </View>
        <View className="w-10/12">
          <Text className="text-xl ">Jakarta</Text>
        </View>
        <Pressable onPress={() => authCtx.logout()}>
          <View className="bg-secondary rounded-full items-center justify-center">
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/walku-387420.appspot.com/o/BlankProf.png?alt=media&token=e2bb5a80-de0c-41f6-96fd-c4f02e2fa3a1",
              }}
              className="w-12 h-12 rounded-full"
            />
          </View>
        </Pressable>
      </View>

      <View className="flex-row justify-center items-center bg-white border border-black my-3 mx-8 rounded-full px-4 shadow-2xl">
        <Image source={Search} className="w-7 h-7" />
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search..."
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
            locCtx.setBl_lat(details?.geometry?.viewport?.southwest?.lat);
            locCtx.setBl_lng(details?.geometry?.viewport?.southwest?.lng);
            locCtx.setTr_lat(details?.geometry?.viewport?.northeast?.lat);
            locCtx.setTr_lng(details?.geometry?.viewport?.northeast?.lng);
            console.log(locCtx.bl_lat);
          }}
          query={{
            key: "AIzaSyAvDY6HvYKu25o6RKVeEQQnLHHUPyRSPwI",
            language: "en",
          }}
        />
      </View>

      {/* Menu Container */}
      <ScrollView>
        {/* Journey Button */}
        <View className="flex-1 justify-center items-center">
          <TouchableOpacity className="flex-row bg-primary h-16 w-10/12 mt-8 px-8 items-center justify-center rounded-2xl">
            <Image source={Map} className="w-8 h-8" />
            <Text className="font-semibold text-xl text-white ml-2">
              Start Your Journey
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-between  px-8 mt-8">
          <MenuContainer
            key={"food"}
            title="Food"
            imageSrc={Food}
            setType="restaurants"
            bgColor={"bg-[#F9B50F]"}
          />

          <MenuContainer
            key={"cafe"}
            title="Cafe"
            imageSrc={Cafe}
            setType="restaurants"
            bgColor={"bg-[#741B1B]"}
          />

          <MenuContainer
            key={"landmark"}
            title="Landmark"
            imageSrc={Landmark}
            setType="restaurants"
            bgColor={"bg-[#7973ED]"}
          />

          <MenuContainer
            key={"museum"}
            title="Museum"
            imageSrc={Museum}
            setType="restaurants"
            bgColor={"bg-[#37F3A4]"}
          />

          <MenuContainer
            key={"shopping"}
            title="Shopping"
            imageSrc={Shopping}
            setType="restaurants"
            bgColor={"bg-[#FCBCB3]"}
          />
        </View>

        <View className="mt-10 px-8">
          <Text className="text-2xl">Popular In Your Area</Text>
        </View>
        <View className="flex-row mt-8 px-4 items-center justify-evenly flex-wrap">
          <ItemCardContainer
            key={"201"}
            imageSrc={MuseumCard}
            title="Top 5 Museum"
          />
          <ItemCardContainer
            key={"202"}
            imageSrc={MuseumCard}
            title="Top 5 Museum"
          />
          <ItemCardContainer
            key={"203"}
            imageSrc={MuseumCard}
            title="Top 5 Museum"
          />
          <ItemCardContainer
            key={"204"}
            imageSrc={MuseumCard}
            title="Top 5 Museum"
          />
          <ItemCardContainer
            key={"205"}
            imageSrc={MuseumCard}
            title="Top 5 Museum"
          />
          <ItemCardContainer
            key={"206"}
            imageSrc={MuseumCard}
            title="Top 5 Museum"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

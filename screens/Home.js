import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
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
  Profile,
  Search,
  Shopping,
} from "../assets";
import ItemCardContainer from "../components/ItemCardContainer";

const Home = () => {
  const navigation = useNavigation();

  const [type, setType] = useState("hotels");

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

        <View className="bg-secondary rounded-full items-center justify-center">
          <Image source={Profile} className="w-12 h-12" />
        </View>
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
            type={type}
            setType={setType}
            bgColor={"bg-[#F9B50F]"}
          />

          <MenuContainer
            key={"cafe"}
            title="Cafe"
            imageSrc={Cafe}
            type={type}
            setType={setType}
            bgColor={"bg-[#741B1B]"}
          />

          <MenuContainer
            key={"landmark"}
            title="Landmark"
            imageSrc={Landmark}
            type={type}
            setType={setType}
            bgColor={"bg-[#7973ED]"}
          />

          <MenuContainer
            key={"museum"}
            title="Museum"
            imageSrc={Museum}
            type={type}
            setType={setType}
            bgColor={"bg-[#37F3A4]"}
          />

          <MenuContainer
            key={"shopping"}
            title="Shopping"
            imageSrc={Shopping}
            type={type}
            setType={setType}
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

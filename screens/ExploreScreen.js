import { View, Text, ActivityIndicator, useState } from "react-native";
import React, { useEffect } from "react";
import { getPlacesData } from "../util/travel";
import ExploreCardContainer from "../components/ExploreCardContainer";

const ExploreScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData().then((data) => {
      setMainData(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <View className=" flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <View>
          {mainData?.length > 0 ? (
            <>
              {mainData?.map((data, i) => (
                <ExploreCardContainer
                  key={i}
                  imageSrc={
                    data?.photo?.images?.medium?.url
                      ? data?.photo?.images?.medium?.url
                      : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                  }
                  title={data?.name}
                  location={data?.location_string}
                  data={data}
                />
              ))}
            </>
          ) : (
            <>
              <View className="w-full h-[400px] items-center space-y-8 justify-center">
                <Text className="text-2xl text-primary font-semibold">
                  Opps...No Data Found
                </Text>
              </View>
            </>
          )}
        </View>
      )}
    </>
  );
};

export default ExploreScreen;

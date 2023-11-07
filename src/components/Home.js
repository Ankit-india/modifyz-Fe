import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import style from "../styles/style";
import DiscountCard from "./DiscountCard";
import Card from "./Card";
import CommonLink from "./CommonLink";
import CommonLinkWithImage from "./CommonLinkWithImage";
import SearchBar from "./SearchBar";
import SeeAll from "./SeeAll";
import { Ionicons } from "@expo/vector-icons";
import { getRequest } from "../commons/api";

const Home = (props) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Define the API endpoint you want to call
  const apiEndpoint = `shop/shopInfo`;

  useEffect(() => {
    // Function to make the API call
    const fetchData = async () => {
      try {
        const responseData = await getRequest(apiEndpoint);
        console.log(responseData);
        setData(responseData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData(); // Call the API when the component mounts
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <View style={style.home.headingContainer}>
            <Text style={style.home.headingContainerTextFirst}>Modifyz</Text>
            <View style={{ display: "flex", flexDirection: "row", gap: 30 }}>
              <Text
                style={style.home.headingContainerTextSecond}
                onPress={() => props.navigation.navigate("My Bookmark")}
              >
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="black"
                />
              </Text>

              <Text
                style={style.home.headingContainerTextSecond}
                onPress={() => props.navigation.navigate("My Bookmark")}
              >
                <Ionicons name="ios-bookmark-outline" size={24} color="black" />
              </Text>
            </View>
          </View>

          <View style={style.home.greetContainer}>
            <Text style={style.home.greetContainerTextFirst}>
              Morning, Daniel
            </Text>
            <Text style={style.home.greetContainerTextSecond}>👋</Text>
          </View>

          <SearchBar />
          <DiscountCard />
          <CommonLinkWithImage data={props} />

          <View style={{ borderWidth: 0.2, borderColor: "grey" }} />

          <SeeAll name={"Nearby Your Location"} data={props} />
          <CommonLink data={props} />
          <Card data={props} />

          <SeeAll name={"Most Popular"} data={props} />
          <CommonLink data={props} />
          <Card data={props} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

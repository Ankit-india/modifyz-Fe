import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import style from "../styles/style";
import { Ionicons } from "@expo/vector-icons";
import MyBookingUpcoming from "./MyBookingUpcoming";
import MyBookingCompleted from "./MyBookingCompleted";
import MyBookingCancelled from "./MyBookingCancelled";

const MyBooking = (props) => {
  const [isToggled, setIsToggled] = useState(true);
  const [isInnerToggled, setIsInnerToggled] = useState(true);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <View style={style.home.headingContainer}>
            <Text style={style.home.headingContainerTextFirst}>My Booking</Text>
            <View style={{ display: "flex", flexDirection: "row", gap: 30 }}>
              <Text style={style.home.headingContainerTextSecond}>
                <Ionicons name="search-outline" size={24} color="black" />
              </Text>

              <Text
                style={style.home.headingContainerTextSecond}
                onPress={() => props.navigation.navigate("My Bookmark")}
              >
                <Ionicons
                  name="ellipsis-horizontal-circle"
                  size={24}
                  color="black"
                />
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
                setIsToggled(true);
                setIsInnerToggled(true);
              }}
            >
              <Text
                style={{
                  backgroundColor: "#1217a4",
                  borderRadius: 30,
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 15,
                  paddingVertical: 10,
                }}
              >
                Upcoming
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
                setIsToggled(true);
                setIsInnerToggled(false);
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "#1217a4",
                  borderRadius: 30,
                  textAlign: "center",
                  color: "#1217a4",
                  fontWeight: "bold",
                  fontSize: 15,
                  paddingVertical: 8,
                }}
              >
                Completed
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
                setIsToggled(false);
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "#1217a4",
                  borderRadius: 30,
                  textAlign: "center",
                  color: "#1217a4",
                  fontWeight: "bold",
                  fontSize: 15,
                  paddingVertical: 8,
                }}
              >
                Cancelled
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ borderWidth: 0.2, borderColor: "grey" }} />

          {isToggled ? (
            isInnerToggled ? (
              <MyBookingUpcoming />
            ) : (
              <MyBookingCompleted />
            )
          ) : (
            <MyBookingCancelled />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyBooking;

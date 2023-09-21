import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import style from "../styles/style";
import { FontAwesome } from "@expo/vector-icons";

const MyBookingUpcoming = () => {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  //   const links = [
  //     {
  //       id: 1,
  //       date: "Dec 23, 2024 - 10:00 A.M",
  //       remindMe: "Remind me",
  //       img: "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
  //       name: "Barbarella Inova",
  //       address: "6993 Meadow Valley Terrace",
  //       service: "Services",
  //       type: "Quiff Haircut, Thin Shaving Aloe Vera Shampoo Hair Wash",
  //     },
  //   ];

  const links = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  return (
    <>
      <View style={{ gap: 50 }}>
        {links.map((value) => (
          <View key={value.id} style={{ gap: 15 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>Dec 23, 2024 - 10:00 A.M</Text>
              <TouchableOpacity
                onPress={handleToggle}
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Text>Remind me</Text>
                <FontAwesome
                  name={isToggled ? "toggle-on" : "toggle-off"}
                  size={27}
                  color={isToggled ? "#1217a4" : "grey"}
                />
              </TouchableOpacity>
            </View>

            <View style={{ borderWidth: 0.3, borderColor: "grey" }} />

            <View
              style={{
                gap: 20,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{ height: 100, width: 100, borderRadius: 10 }}
                source={{
                  uri: "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
                }}
              />

              <View style={{ gap: 5 }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  Barbarella Inova
                </Text>
                <Text style={{ color: "grey" }}>
                  6993 Meadow Valley Terrace
                </Text>
                <Text style={{ color: "grey" }}>Services</Text>
                <Text style={{ color: "grey" }}>
                  Quiff Haircut, Thin Shaving Aloe Vera Shampoo Hair Wash
                </Text>
              </View>
            </View>

            <View style={{ borderWidth: 0.3, borderColor: "grey" }} />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <TouchableOpacity style={{ flex: 1 }}>
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
                  Cancel Booking
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1 }}>
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
                  View E-Receipt
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </>
  );
};

export default MyBookingUpcoming;

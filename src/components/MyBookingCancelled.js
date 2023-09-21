import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import style from "../styles/style";

const MyBookingCancelled = () => {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

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
                <Text
                  style={{
                    backgroundColor: "red",
                    paddingVertical: 3,
                    paddingHorizontal: 8,
                    borderRadius: 5,
                    color: "white",
                  }}
                >
                  Cancelled
                </Text>
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
                  Lighthouse Barbers
                </Text>
                <Text style={{ color: "grey" }}>
                  6993 Meadow Valley Terrace
                </Text>
                <Text style={{ color: "grey" }}>Services</Text>
                <Text style={{ color: "#1217a4" }}>
                  Quiff Haircut, Thin Shaving Aloe Vera Shampoo Hair Wash
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </>
  );
};

export default MyBookingCancelled;

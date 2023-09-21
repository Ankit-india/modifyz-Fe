import { View, Text } from "react-native";
import React from "react";
import style from "../styles/style";
import { FontAwesome5 } from "@expo/vector-icons";

const SocialIcon = () => {
  return (
    <View style={{ gap: 30 }}>
      <View>
        <Text style={style.or}>or continue with </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <FontAwesome5 name="facebook" size={30} color="#0040cf" />
        <FontAwesome5 name="google" size={24} color="green" />
        <FontAwesome5 name="apple" size={32} color="black" />
      </View>
    </View>
  );
};

export default SocialIcon;

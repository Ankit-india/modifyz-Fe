import { View, Text } from "react-native";
import React from "react";
import style from "../styles/style";
import { FontAwesome5 } from "@expo/vector-icons";

const SocialIconWithName = () => {
  return (
    <View style={{ gap: 20 }}>
      <View style={style.socialMediaContainer}>
        <FontAwesome5 name="facebook" size={30} color="#0040cf" />
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Continue with Facebook
        </Text>
      </View>

      <View style={style.socialMediaContainer}>
        <FontAwesome5 name="google" size={24} color="green" />
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Continue with Google
        </Text>
      </View>

      <View style={style.socialMediaContainer}>
        <FontAwesome5 name="apple" size={32} color="black" />
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Continue with Apple
        </Text>
      </View>
    </View>
  );
};

export default SocialIconWithName;

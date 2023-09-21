import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import FixedDataBarber from "./FixedDataBarber";
import style from "../styles/style";

const CommonLinkBarber = ({ data }) => {
  const links = FixedDataBarber;

  return (
    <View style={style.commonLinkBarber.container}>
      {links.map((value) => {
        return (
          <Text
            key={value.text}
            onPress={() => data.navigation.navigate(value.link)}
            style={style.commonLinkBarber.text}
          >
            {value.text}
          </Text>
        );
      })}
    </View>
  );
};

export default CommonLinkBarber;

import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import FixedData from "./FixedData";
import style from "../styles/style";

const CommonLink = ({ data }) => {
  const links = FixedData;

  return (
    <View style={style.commonLink.container}>
      {links.map((value) => {
        return (
          <Text
            key={value.text}
            onPress={() => data.navigation.navigate(value.link)}
            style={style.commonLink.text}
          >
            {value.text}
          </Text>
        );
      })}
    </View>
  );
};

export default CommonLink;

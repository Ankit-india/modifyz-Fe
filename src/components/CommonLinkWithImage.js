import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import FixedData from "./FixedData";
import style from "../styles/style";

const CommonLinkWithImage = ({ data }) => {
  const links = FixedData;

  return (
    <View style={style.commonLinkWithImage.container}>
      {links.map((value) => {
        return (
          <View style={{ gap: 15, alignItems: "center" }} key={value.text}>
            <Image
              style={style.commonLinkWithImage.image}
              source={{
                uri: value.img,
              }}
            />
            <Text
              onPress={() => data.navigation.navigate(value.link)}
              style={style.commonLinkWithImage.text}
            >
              {value.text}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default CommonLinkWithImage;

import { View, Text } from "react-native";
import React from "react";
import style from "../styles/style";

const SeeAll = ({ data, name }) => (
  <View style={style.seeAll.container}>
    <Text style={style.seeAll.textFirst}>{name}</Text>
    <Text
      onPress={() => data.navigation.navigate(name)}
      style={style.seeAll.textSecond}
    >
      See All
    </Text>
  </View>
);

export default SeeAll;

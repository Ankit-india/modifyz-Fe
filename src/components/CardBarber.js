import { View, Text, Image } from "react-native";
import React from "react";
import FixedDataCardBarber from "./FixedDataCardBarber";
import style from "../styles/style";

const CardBarber = () => {
  const links = FixedDataCardBarber;

  return links.map((value) => {
    return (
      <View style={style.cardBarber.container} key={value.id}>
        <Image
          style={style.cardBarber.image}
          source={{
            uri: value.img,
          }}
        />
        <Text style={style.cardBarber.textFirst}>{value.firstName}</Text>
        <Text style={style.cardBarber.textSecond}>{value.designation}</Text>
      </View>
    );
  });
};

export default CardBarber;

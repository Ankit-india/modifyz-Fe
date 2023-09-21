import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import FixedDataCard from "./FixedDataCard";
import style from "../styles/style";

const Card = ({ data }) => {
  const links = FixedDataCard;

  return (
    <>
      {links.map((value) => {
        return (
          <TouchableOpacity
            key={value.id}
            onPress={() => data.navigation.navigate("Barber", { id: value.id })}
          >
            <View key={value.id} style={style.card.container}>
              <Image
                style={style.card.image}
                source={{
                  uri: value.img,
                }}
              />

              <View style={style.card.innerContainer}>
                <Text style={style.card.textFirst}>{value.name}</Text>
                <Text style={style.card.textSecond}>{value.address}</Text>
                <Text>
                  {value.distance} {value.ratingEmoji} {value.rating}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default Card;

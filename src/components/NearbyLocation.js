import { View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Card from "./Card";
import CommonLink from "./CommonLink";
import style from "../styles/style";

const NearbyLocation = (props) => {
  return (
    <SafeAreaView style={[style.safeAreaContainer]}>
      <ScrollView>
        <View style={style.container}>
          <CommonLink data={props} />
          <Card data={props}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NearbyLocation;

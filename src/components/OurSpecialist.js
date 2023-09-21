import { View, SafeAreaView, ScrollView, Text } from "react-native";
import React from "react";
import style from "../styles/style";
import CardBarber from "./CardBarber";

const OurSpecialist = (props) => {
  return (
    <SafeAreaView style={[style.safeAreaContainer]}>
      <ScrollView>
        <View style={style.container}>
          <Text>They are on the way. Please Wait patiently......</Text>
          <CardBarber />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OurSpecialist;

import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import style from "../styles/style";

const Services = () => {
  return (
    <SafeAreaView style={[style.safeAreaContainer]}>
    <ScrollView>
      <View style={style.container}>
        <Text>Services Coming soon.....</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};

export default Services;

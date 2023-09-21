import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import style from "../styles/style";

const AboutUs = () => {
  return (
    <SafeAreaView style={[style.safeAreaContainer]}>
      <ScrollView>
        <View style={style.container}>
          <Text>About us Coming soon.....</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUs;

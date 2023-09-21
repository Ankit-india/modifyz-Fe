import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import style from "../styles/style";

const OurServices = () => {
  return (
    <SafeAreaView style={[style.safeAreaContainer]}>
      <ScrollView>
        <View style={style.container}>
          <Text>Our Service will Coming soon with Some Adventures.....</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OurServices;

import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import style from "../styles/style";

const Package = () => {
  return (
    <SafeAreaView style={[style.safeAreaContainer]}>
    <ScrollView>
      <View style={style.container}>
        <Text>Package Coming soon.....</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};

export default Package;

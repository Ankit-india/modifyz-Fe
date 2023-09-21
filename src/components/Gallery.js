import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import style from "../styles/style";

const Gallery = () => {
  return (
    <SafeAreaView style={[style.safeAreaContainer]}>
    <ScrollView>
      <View style={style.container}>
        <Text>Gallery Coming soon.....</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};

export default Gallery;

import { View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Card from "./Card";
import style from "../styles/style";
import SearchBar from "./SearchBar";

const Massage = () => {
  return (
    <SafeAreaView style={[style.safeAreaContainer]}>
      <ScrollView>
        <View style={style.container}>
          <SearchBar />
          <Card />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Massage;

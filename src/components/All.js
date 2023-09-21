import { View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Card from "./Card";
import style from "../styles/style";
import SearchBar from "./SearchBar";

const All = (props) => {
  return (
    <SafeAreaView style={[style.safeAreaContainer]}>
      <ScrollView>
        <View style={style.container}>
          <SearchBar />
          <Card data={props} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default All;

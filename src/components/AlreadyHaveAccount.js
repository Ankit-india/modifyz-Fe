import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import style from "../styles/style";

const AlreadyHaveAccount = ({ data }) => {
  return (
    <View style={style.flexCenter}>
      <Text style={{ fontWeight: 400, color: "grey" }}>
        Already have an account ?
      </Text>
      <TouchableOpacity onPress={() => data.navigation.navigate("SIGN IN")}>
        <Text style={style.color}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlreadyHaveAccount;

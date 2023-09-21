import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import style from "../styles/style";

const DontHaveAccount = ({ data }) => {
  return (
    <View style={style.flexCenter}>
      <Text style={{ fontWeight: 400, color: "grey" }}>
        Don't have an account ?{" "}
      </Text>
      <TouchableOpacity onPress={() => data.navigation.navigate("SIGN UP")}>
        <Text style={style.color}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DontHaveAccount;

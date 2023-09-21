import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import style from "../styles/style";
import SocialIcon from "./SocialIcon";
import Form from "./Form";
import AlreadyHaveAccount from "./AlreadyHaveAccount";

const Signup = (props) => {
  return (
    <SafeAreaView style={[style.safeAreaContainer, style.formContainer]}>
      <View>
        <Text style={{ fontWeight: 400, fontSize: 50 }}>
          Create Your Account
        </Text>
      </View>

      <Form data={props} targetRoute={"Fill Your Profile"} />

      <SocialIcon />

      <AlreadyHaveAccount data={props} />
    </SafeAreaView>
  );
};

export default Signup;

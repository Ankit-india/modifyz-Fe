import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import style from "../styles/style";
import Form from "./Form";
import SocialIcon from "./SocialIcon";
import DontHaveAccount from "./DontHaveAccount";

const SigninWithPassword = (props) => {
  return (
    <SafeAreaView style={[style.safeAreaContainer, style.formContainer]}>
      <View>
        <Text style={{ fontWeight: 400, fontSize: 50 }}>
          Login to Your Account
        </Text>
      </View>

      <Form data={props} targetRoute={"/"} />

      <Text style={style.forgetPassColor}>Forgot the password?</Text>

      <SocialIcon />

      <DontHaveAccount data={props} />
    </SafeAreaView>
  );
};

export default SigninWithPassword;

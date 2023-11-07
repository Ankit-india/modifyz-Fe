import React, { useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import style from "../styles/style";
import DontHaveAccount from "./DontHaveAccount";
import OTPTextInput from "react-native-otp-textinput";
import { Platform, StatusBar } from "react-native";
import { postRequest } from "../commons/api";

const NumberOtp = (props) => {
  const { route } = props;
  const { phoneNumber: phNumber } = route.params;
  let otpInput = useRef(null);
  const [otpValue, setOtpValue] = useState();

  const handleOTPChange = (value) => {
    setOtpValue(value);
  };
  const onSubmit = async (data) => {
    try {
      const phoneNumber = phNumber;
      const otp = otpValue;

      const requestBody = {
        phoneNumber,
        otp,
      };
      console.log("requestBody \n", requestBody);
      const endpoint = `login/validateOtp`;
      // Use the Api class to make a POST request
      const responseData = await postRequest(endpoint, requestBody);
      console.log(responseData);
      if (responseData.statusCode === 200) {
        const endpoint = `shop/list`
        props.navigation.replace("/");
      } else {
        Alert.alert("Otp not match", responseData.message);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View
        style={{
          paddingHorizontal: 25,
          paddingBottom: 25,
          flex: 1,
          justifyContent: "center",
          gap: 40,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: 400, fontSize: 40 }}>
            Enter 6 digit OTP
          </Text>
        </View>

        <View>
          <Text>Enter the OTP code form your phone we just sent you</Text>
        </View>

        <View>
          <OTPTextInput
            textInputStyle={styles.textInputStyle}
            tintColor="#1217a4"
            // ref={(e) => (otpInput = e)}
            ref={otpInput}
            handleTextChange={handleOTPChange}
            inputCount={6}
          />
        </View>

        <View>
          <Text>
            Didn't receive OTP code ? {""}
            <Text style={style.color}> Resend</Text>
          </Text>
        </View>

        <TouchableOpacity>
          <Text style={style.button} onPress={onSubmit}>
            Sumbit
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    width: 40,
    height: 40,
    fontSize: 16,
  },
});

export default NumberOtp;

import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import style from "../styles/style";
import { useForm, Controller } from "react-hook-form";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { postRequest } from "../commons/api";

const Signin = (props) => {
  const form = useForm();
  const { control, handleSubmit, setValue, watch, formState } = form;
  const { errors } = formState;

  const [gender, setGender] = useState("male");

  const onSubmit = async (data) => {
    try {
      const phoneNumber = data.number;
      // const phoneNumber = data.number.replace(/\D/g, ""); // Remove non-digit characters
      const selectedGender = gender;
      const endpoint = `login/?phoneNumber=${phoneNumber}&gender=${selectedGender}`;
      const responseData = await postRequest(endpoint, null);
      if (responseData.statusCode === 200) {
        props.navigation.replace("OTP", {
          phoneNumber: phoneNumber,
        });
      } else {
        Alert.alert("Sign-in failed", responseData.message);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  const number = watch("number");
  const maxLength = 13;

  useEffect(() => {
    if (number && number.toString().length > maxLength) {
      setValue("number", number.toString().slice(0, maxLength));
    }
  }, [number, maxLength, setValue]);

  return (
    <SafeAreaView style={[style.safeAreaContainer]}>
      <ScrollView>
        <View style={[style.container]}>
          <View style={{ alignItems: "center", marginTop: 50 }}>
            <Image
              style={{
                height: 170,
                width: 170,
                borderRadius: 150,
              }}
              source={require("../../assets/loginIcon.png")}
            />
          </View>
          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: 50, textAlign: "center" }}
            >
              Let's you in
            </Text>
          </View>
          <View style={{ gap: 25, marginVertical: 30 }}>
            <View>
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "⊗ This is a required field",
                  },
                  pattern: {
                    value: /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/,
                    message: "⊗ Enter a valid number",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <View style={style.inputFieldContainer}>
                    <MaterialCommunityIcons
                      name="phone"
                      size={24}
                      color="grey"
                    />
                    <TextInput
                      placeholder="+91 xxxxxxxxxx"
                      onChangeText={onChange}
                      value={value}
                      style={style.textInputField}
                      underlineColorAndroid="transparent"
                      keyboardType="numeric"
                    />
                  </View>
                )}
                name="number"
              />
              <Text style={{ color: "red" }}>{errors.number?.message}</Text>
            </View>

            {/* Radio buttons for choosing gender */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton
                value="male"
                status={gender === "male" ? "checked" : "unchecked"}
                onPress={() => setGender("male")}
                color="blue" // Customize the color as needed
              />
              <Text>Male</Text>
              <RadioButton
                value="female"
                status={gender === "female" ? "checked" : "unchecked"}
                onPress={() => setGender("female")}
                color="blue" // Customize the color as needed
              />
              <Text>Female</Text>
            </View>

            <TouchableOpacity onPress={handleSubmit(onSubmit)}>
              <Text style={style.button}>Sign in</Text>
            </TouchableOpacity>
          </View>

          {/* <View>
            <Text style={style.or}>or</Text>
          </View>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("SIGN IN WITH PASSWORD")}
          >
            <Text style={style.button}>Sign in with password</Text>
          </TouchableOpacity>

          <DontHaveAccount data={props} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;

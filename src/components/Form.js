import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import style from "../styles/style";
import { useRoute } from "@react-navigation/native";

const Form = ({ data, targetRoute }) => {
  // console.warn(data)
  const form = useForm({});
  const route = useRoute();

  let [email, setEmail] = useState("admin");
  let [password, setPassword] = useState("admin");

  const { control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmitSignIn = (value) => {
    if (value.email === email && value.password === password) {
      data.navigation.navigate(targetRoute);
    } else {
      return Alert.alert("Wrong Credential");
    }
  };

  const onSubmitSignUp = (value) => {
    data.navigation.navigate(targetRoute);
  };

  let text;

  switch (route.name) {
    case "SIGN UP":
      text = (
        <TouchableOpacity onPress={handleSubmit(onSubmitSignUp)}>
          <Text style={style.button}>Sign up</Text>
        </TouchableOpacity>
      );
      break;
    case "SIGN IN WITH PASWORD":
      text = (
        <TouchableOpacity onPress={handleSubmit(onSubmitSignIn)}>
          <Text style={style.button}>Sign in</Text>
        </TouchableOpacity>
      );
      break;
    default:
      text = <Text style={style.button}>Neither condition is true</Text>;
  }

  return (
    <>
      <View style={{ gap: 10 }}>
        <View>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
              required: {
                value: true,
                message: "⊗ This is required field",
              },
              // pattern: {
              //   value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              //   message: "⊗ Please enter valid email ",
              // },
            }}
            render={({ field: { onChange, value } }) => (
              <View style={style.inputFieldContainer}>
                <MaterialCommunityIcons name="email" size={24} color="grey" />
                <TextInput
                  placeholder="abc@gmail.com"
                  onChangeText={onChange}
                  value={value}
                  style={style.textInputField}
                  underlineColorAndroid="transparent"
                />
              </View>
            )}
            name="email"
          />
          <Text style={{ color: "red" }}>{errors.email?.message}</Text>
        </View>

        <View>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: "⊗ This is required field",
              },
              // pattern: {
              //   value:
              //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              //   message: "⊗ Please enter valid password ",
              // },
            }}
            render={({ field: { onChange, value } }) => (
              <View style={style.inputFieldContainer}>
                <FontAwesome5 name="lock" size={22} color="grey" />
                <TextInput
                  placeholder="Abcd@123"
                  onChangeText={onChange}
                  value={value}
                  style={style.textInputField}
                  underlineColorAndroid="transparent"
                />
              </View>
            )}
            name="password"
          />
          <Text style={{ color: "red" }}>{errors.password?.message}</Text>
        </View>
      </View>
      <View style={{ gap: 20 }}>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Remember me
        </Text>

        <View>{text}</View>
      </View>
    </>
  );
};

export default Form;

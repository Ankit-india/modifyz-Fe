import React from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import style from "../styles/style";

const DetailForm = (props) => {
  const form = useForm({});

  const { control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    props.navigation.navigate("/", { naam: "Admin" });
  };

  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <View style={style.container}>
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
                }}
                render={({ field: { onChange, value } }) => (
                  <View style={style.inputFieldContainer}>
                    <TextInput
                      placeholder="Full Name"
                      onChangeText={onChange}
                      value={value}
                      style={style.textInputField}
                      underlineColorAndroid="transparent"
                    />
                  </View>
                )}
                name="fullname"
              />
              <Text style={{ color: "red" }}>{errors.fullname?.message}</Text>
            </View>

            <View>
              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                  required: {
                    value: true,
                    message: "⊗ This is required field",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <View style={style.inputFieldContainer}>
                    <TextInput
                      placeholder="Nickname"
                      onChangeText={onChange}
                      value={value}
                      style={style.textInputField}
                      underlineColorAndroid="transparent"
                    />
                  </View>
                )}
                name="nickname"
              />
              <Text style={{ color: "red" }}>{errors.nickname?.message}</Text>
            </View>

            <View>
              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                  required: {
                    value: true,
                    message: "⊗ This is required field",
                  },
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "⊗ Please enter valid email ",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <View style={style.inputFieldContainer}>
                    <TextInput
                      placeholder="abc@gmail.com"
                      onChangeText={onChange}
                      value={value}
                      style={style.textInputField}
                      underlineColorAndroid="transparent"
                    />
                    <MaterialCommunityIcons
                      name="email"
                      size={24}
                      color="grey"
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
                  maxLength: 100,
                  required: {
                    value: true,
                    message: "⊗ This is required field",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <View style={style.inputFieldContainer}>
                    <TextInput
                      placeholder="Phone Number"
                      onChangeText={onChange}
                      value={value}
                      style={style.textInputField}
                      underlineColorAndroid="transparent"
                    />
                    <MaterialCommunityIcons
                      name="phone"
                      size={24}
                      color="grey"
                    />
                  </View>
                )}
                name="phone"
              />
              <Text style={{ color: "red" }}>{errors.phone?.message}</Text>
            </View>

            <View>
              <Text onPress={handleSubmit(onSubmit)} style={style.button}>
                Continue
              </Text>
            </View>
          </View>
        </>
      </View>
    </SafeAreaView>
  );
};

export default DetailForm;

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import style from "../styles/style";
import format from "date-fns/format";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ProfileEdit = (props) => {
  //
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDateOfBirth(date);
    console.warn(dateOfBirth);

    hideDatePicker();
  };
  //
  const form = useForm({});

  const { control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.warn(data);
  };
  return (
    <SafeAreaView style={[style.safeAreaContainer]}>
      <ScrollView>
        <View style={[style.container, { gap: 10 }]}>
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
                <View style={style.editProfile.inputFieldContainer}>
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
                <View style={style.editProfile.inputFieldContainer}>
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
              //   rules={{
              //     maxLength: 100,
              //     required: {
              //       value: true,
              //       message: "⊗ This is required field",
              //     },
              //   }}
              render={({ field: { onChange, value } }) => (
                <View style={style.editProfile.inputFieldContainer}>
                  {/* <TextInput
                    placeholder="12/12/2001"
                    onChangeText={onChange}
                    value={value}
                    style={style.textInputField}
                    underlineColorAndroid="transparent"
                  /> */}
                  <Text style={style.textInputField}>
                    {dateOfBirth
                      ? format(dateOfBirth, "yyyy-MM-dd")
                      : "Date of Birth"}
                  </Text>
                  <MaterialCommunityIcons
                    name="calendar-month"
                    size={24}
                    color="grey"
                    onPress={showDatePicker}
                  />
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
                </View>
              )}
              name="dateofbirth"
            />
            <Text style={{ color: "red" }}>{errors.dateofbirth?.message}</Text>
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
                <View style={style.editProfile.inputFieldContainer}>
                  <TextInput
                    placeholder="abc@gmail.com"
                    onChangeText={onChange}
                    value={value}
                    style={style.textInputField}
                    underlineColorAndroid="transparent"
                  />
                  <MaterialCommunityIcons name="email" size={24} color="grey" />
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
                <View style={style.editProfile.inputFieldContainer}>
                  <TextInput
                    placeholder="Country"
                    onChangeText={onChange}
                    value={value}
                    style={style.textInputField}
                    underlineColorAndroid="transparent"
                  />
                  <Ionicons name="caret-down-outline" size={24} color="grey" />
                </View>
              )}
              name="country"
            />
            <Text style={{ color: "red" }}>{errors.country?.message}</Text>
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
                <View style={style.editProfile.inputFieldContainer}>
                  <TextInput
                    placeholder="Phone Number"
                    onChangeText={onChange}
                    value={value}
                    style={style.textInputField}
                    underlineColorAndroid="transparent"
                  />
                  <MaterialCommunityIcons name="phone" size={24} color="grey" />
                </View>
              )}
              name="phone"
            />
            <Text style={{ color: "red" }}>{errors.phone?.message}</Text>
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
                <View style={style.editProfile.inputFieldContainer}>
                  <TextInput
                    placeholder="Gender"
                    onChangeText={onChange}
                    value={value}
                    style={style.textInputField}
                    underlineColorAndroid="transparent"
                  />
                  <Ionicons name="caret-down-outline" size={24} color="grey" />
                </View>
              )}
              name="gender"
            />
            <Text style={{ color: "red" }}>{errors.gender?.message}</Text>
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
                <View style={style.editProfile.inputFieldContainer}>
                  <TextInput
                    placeholder="Enter your address"
                    onChangeText={onChange}
                    value={value}
                    style={style.textInputField}
                    underlineColorAndroid="transparent"
                  />
                </View>
              )}
              name="address"
            />
            <Text style={{ color: "red" }}>{errors.address?.message}</Text>
          </View>

          <View>
            <Text onPress={handleSubmit(onSubmit)} style={style.button}>
              Update
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileEdit;

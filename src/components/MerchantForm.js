// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   TouchableOpacity,
//   ScrollView,
//   SafeAreaView,
// } from "react-native";
// import style from "../styles/style";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// function MerchantForm() {
//   const { control, handleSubmit, formState, setValue } = useForm();
//   const { errors } = formState;

//   const onSubmit = (data) => {
//     // Handle form submission with the data object
//     console.log(data);
//   };

//   return (
//     <SafeAreaView style={[style.safeAreaContainer]}>
//       <ScrollView>
//         <View style={{ margin: 16 }}>
//           <Text style={{ fontSize: 45 }}>Merchant Form</Text>
//           {/* PAN Number */}
//           <View style={style.inputFieldContainer}>
//             <MaterialCommunityIcons name="id-card" size={24} color="grey" />
//             <Controller
//               control={control}
//               rules={{ required: "This is a required field" }}
//               render={({ field: { onChange, value } }) => (
//                 <TextInput
//                   placeholder="HEPPXXXXXK"
//                   style={style.textInputField}
//                   onChangeText={(text) => {
//                     onChange(text);
//                   }}
//                   value={value}
//                 />
//               )}
//               name="panNumber"
//               defaultValue=""
//             />
//           </View>
//           {errors.panNumber && (
//             <Text style={{ color: "red" }}>{errors.panNumber.message}</Text>
//           )}
//           {/* Shop Name */}
//           <View style={style.inputFieldContainer}>
//             <MaterialCommunityIcons
//               name="office-building"
//               size={24}
//               color="grey"
//             />
//             <Controller
//               control={control}
//               rules={{ required: "This is a required field" }}
//               render={({ field: { onChange, value } }) => (
//                 <TextInput
//                   placeholder="Enter your shop name here"
//                   style={style.textInputField}
//                   onChangeText={(text) => {
//                     onChange(text);
//                   }}
//                   value={value}
//                 />
//               )}
//               name="shopName"
//               defaultValue=""
//             />
//           </View>
//           {errors.shopName && (
//             <Text style={{ color: "red" }}>{errors.shopName.message}</Text>
//           )}
//           {/* Owner Name */}
//           <View style={style.inputFieldContainer}>
//             <MaterialCommunityIcons
//               name="face-man-profile"
//               size={24}
//               color="grey"
//             />
//             <Controller
//               control={control}
//               rules={{ required: "This is a required field" }}
//               render={({ field: { onChange, value } }) => (
//                 <TextInput
//                   placeholder="Enter Owner name here"
//                   style={style.textInputField}
//                   onChangeText={(text) => {
//                     onChange(text);
//                   }}
//                   value={value}
//                 />
//               )}
//               name="ownerName"
//               defaultValue=""
//             />
//           </View>
//           {errors.ownerName && (
//             <Text style={{ color: "red" }}>{errors.ownerName.message}</Text>
//           )}
//           {/* Nick Name */}
//           <View style={style.inputFieldContainer}>
//             <MaterialCommunityIcons
//               name="face-man-profile"
//               size={24}
//               color="grey"
//             />
//             <Controller
//               control={control}
//               render={({ field: { onChange, value } }) => (
//                 <TextInput
//                   placeholder="Enter Nick name here"
//                   style={style.textInputField}
//                   onChangeText={(text) => {
//                     onChange(text);
//                   }}
//                   value={value}
//                 />
//               )}
//               name="nickName"
//               defaultValue=""
//             />
//           </View>
//           {/* Description */}
//           <View style={style.inputFieldContainer}>
//             <MaterialCommunityIcons
//               name="face-man-profile"
//               size={24}
//               color="grey"
//             />
//             <Controller
//               control={control}
//               render={({ field: { onChange, value } }) => (
//                 <TextInput
//                   placeholder="Enter One Liner for your shop"
//                   style={style.textInputField}
//                   multiline={true}
//                   onChangeText={(text) => {
//                     onChange(text);
//                   }}
//                   value={value}
//                 />
//               )}
//               name="description"
//               defaultValue=""
//             />
//           </View>
//           {/* Mobile Number */}
//           <View style={style.inputFieldContainer}>
//             <MaterialCommunityIcons name="phone" size={24} color="grey" />
//             <Controller
//               control={control}
//               rules={{
//                 required: "This is a required field",
//                 pattern: {
//                   value: /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/,
//                   message: "Enter a valid number",
//                 },
//               }}
//               render={({ field: { onChange, value } }) => (
//                 <TextInput
//                   placeholder="+91 xxxxxxxxxx"
//                   style={style.textInputField}
//                   onChangeText={(text) => {
//                     onChange(text);
//                   }}
//                   value={value}
//                 />
//               )}
//               name="mobileNumber"
//               defaultValue=""
//             />
//           </View>
//           {errors.mobileNumber && (
//             <Text style={{ color: "red" }}>{errors.mobileNumber.message}</Text>
//           )}
//           {/* Alternate Mobile Number */}
//           <View style={style.inputFieldContainer}>
//             <MaterialCommunityIcons name="phone" size={24} color="grey" />
//             <Controller
//               control={control}
//               render={({ field: { onChange, value } }) => (
//                 <TextInput
//                   placeholder="Enter Alternate Mobile Number"
//                   style={style.textInputField}
//                   onChangeText={(text) => {
//                     onChange(text);
//                   }}
//                   value={value}
//                 />
//               )}
//               name="alternateMobileNumber"
//               defaultValue=""
//             />
//           </View>
//           {/* Address */}
//           <View style={style.inputFieldContainer}>
//             <MaterialCommunityIcons name="home" size={24} color="grey" />
//             <Controller
//               control={control}
//               render={({ field: { onChange, value } }) => (
//                 <TextInput
//                   placeholder="Enter Address"
//                   style={style.textInputField}
//                   multiline={true}
//                   onChangeText={(text) => {
//                     onChange(text);
//                   }}
//                   value={value}
//                 />
//               )}
//               name="address"
//               defaultValue=""
//             />
//           </View>
//           <TouchableOpacity onPress={handleImageUpload}>
//             <Text style={style.button}>Upload Images</Text>
//           </TouchableOpacity>
//           {images.map((image, index) => (
//             <Image
//               key={index}
//               source={{ uri: image.uri }}
//               style={{ width: 100, height: 100, marginVertical: 10 }}
//             />
//           ))}
//           <TouchableOpacity onPress={handleSubmit(onSubmit)}>
//             <Text style={style.button}>Register Shop</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// export default MerchantForm;

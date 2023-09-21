import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import style from "../styles/style";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const ProfileSecurity = (props) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <SafeAreaView style={[style.safeAreaContainer]}>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 25,
            flex: 1,
            gap: 27,
            flexDirection: "column",
          }}
        >
          <TouchableOpacity onPress={handleToggle}>
            <View style={style.profile.cardContainer}>
              <Text style={style.profile.text}>Remember me</Text>
              <FontAwesome
                name={isToggled ? "toggle-on" : "toggle-off"}
                size={30}
                color={isToggled ? "#1217a4" : "grey"}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleToggle}>
            <View style={style.profile.cardContainer}>
              <Text style={style.profile.text}>Face ID</Text>
              <FontAwesome
                name={isToggled ? "toggle-on" : "toggle-off"}
                size={30}
                color={isToggled ? "#1217a4" : "grey"}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleToggle}>
            <View style={style.profile.cardContainer}>
              <Text style={style.profile.text}>Biometric ID</Text>
              <FontAwesome
                name={isToggled ? "toggle-on" : "toggle-off"}
                size={30}
                color={isToggled ? "#1217a4" : "grey"}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={style.profile.cardContainer}>
              <Text style={style.profile.text}>Google Authenticator</Text>
              <MaterialCommunityIcons name="greater-than" size={18} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={style.button}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileSecurity;

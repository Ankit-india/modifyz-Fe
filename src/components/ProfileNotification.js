import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import style from "../styles/style";
import { FontAwesome } from "@expo/vector-icons";

const ProfileNotification = (props) => {
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
              <Text style={style.profile.text}>General Notification</Text>
              <FontAwesome
                name={isToggled ? "toggle-on" : "toggle-off"}
                size={30}
                color={isToggled ? "#1217a4" : "grey"}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleToggle}>
            <View style={style.profile.cardContainer}>
              <Text style={style.profile.text}>Sound</Text>
              <FontAwesome
                name={isToggled ? "toggle-on" : "toggle-off"}
                size={30}
                color={isToggled ? "grey" : "#1217a4"}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleToggle}>
            <View style={style.profile.cardContainer}>
              <Text style={style.profile.text}>Vibrate</Text>
              <FontAwesome
                name={isToggled ? "toggle-on" : "toggle-off"}
                size={30}
                color={isToggled ? "#1217a4" : "grey"}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleToggle}>
            <View style={style.profile.cardContainer}>
              <Text style={style.profile.text}>Special Offers</Text>
              <FontAwesome
                name={isToggled ? "toggle-on" : "toggle-off"}
                size={30}
                color={isToggled ? "grey" : "#1217a4"}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleToggle}>
            <View style={style.profile.cardContainer}>
              <Text style={style.profile.text}>Promo & Discount</Text>
              <FontAwesome
                name={isToggled ? "toggle-on" : "toggle-off"}
                size={30}
                color={isToggled ? "#1217a4" : "grey"}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleToggle}>
            <View style={style.profile.cardContainer}>
              <Text style={style.profile.text}>Payments</Text>
              <FontAwesome
                name={isToggled ? "toggle-on" : "toggle-off"}
                size={30}
                color={isToggled ? "grey" : "#1217a4"}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleToggle}>
            <View style={style.profile.cardContainer}>
              <Text style={style.profile.text}>Cashback</Text>
              <FontAwesome
                name={isToggled ? "toggle-on" : "toggle-off"}
                size={30}
                color={isToggled ? "#1217a4" : "grey"}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleToggle}>
            <View style={style.profile.cardContainer}>
              <Text style={style.profile.text}>App Updates</Text>
              <FontAwesome
                name={isToggled ? "toggle-on" : "toggle-off"}
                size={30}
                color={isToggled ? "#1217a4" : "grey"}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleToggle}>
            <View style={style.profile.cardContainer}>
              <Text style={style.profile.text}>New Services Available</Text>
              <FontAwesome
                name={isToggled ? "toggle-on" : "toggle-off"}
                size={30}
                color={isToggled ? "grey" : "#1217a4"}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleToggle}>
            <View style={style.profile.cardContainer}>
              <Text style={style.profile.text}>New Tips Available</Text>
              <FontAwesome
                name={isToggled ? "toggle-on" : "toggle-off"}
                size={30}
                color={isToggled ? "#1217a4" : "grey"}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileNotification;

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

const ProfileLanguage = (props) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const data = [
    { name: "Mandarin" },
    { name: "Hindi" },
    { name: "Spanish" },
    { name: "French" },
    { name: "Arabic" },
    { name: "Bengali" },
    { name: "Russian" },
    { name: "Indonesia" },
  ];

  return (
    <SafeAreaView style={[style.safeAreaContainer]}>
      <ScrollView>
        <View style={style.container}>
          <View>
            <Text style={[style.profile.text, { fontSize: 18 }]}>
              Suggested
            </Text>
          </View>
          <TouchableOpacity onPress={handleToggle}>
            <View style={style.profile.cardContainer}>
              <Text style={style.profile.text}>English (US)</Text>
              <FontAwesome
                name={isToggled ? "circle" : "circle-o"}
                size={24}
                color={isToggled ? "#1217a4" : "grey"}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleToggle}>
            <View style={style.profile.cardContainer}>
              <Text style={style.profile.text}>English (UK)</Text>
              <FontAwesome
                name={isToggled ? "circle" : "circle-o"}
                size={24}
                color={isToggled ? "#1217a4" : "grey"}
              />
            </View>
          </TouchableOpacity>

          {/* {data.map((value) => (
            <TouchableOpacity onPress={handleToggle}>
              <View style={style.profile.cardContainer}>
                <Text style={style.profile.text}>{value.name}</Text>
                <FontAwesome
                  name={isToggled ? "circle" : "circle-o"}
                  size={30}
                  color={isToggled ? "#1217a4" : "grey"}
                />
              </View>
            </TouchableOpacity>
          ))} */}

          <View style={{ borderWidth: 0.2, borderColor: "grey" }} />
        </View>

        <View style={style.container}>
          <View>
            <Text style={[style.profile.text, { fontSize: 18 }]}>Language</Text>
          </View>

          {data.map((value) => (
            <TouchableOpacity onPress={handleToggle} key={value.name}>
              <View style={style.profile.cardContainer}>
                <Text style={style.profile.text}>{value.name}</Text>
                <FontAwesome
                  name={isToggled ? "circle" : "circle-o"}
                  size={24}
                  color={isToggled ? "#1217a4" : "grey"}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileLanguage;

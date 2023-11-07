import React, { useEffect } from "react";
import {
  Image,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import style from "../styles/style";

const Welcome = (props) => {
  useEffect(() => {
    // Use setTimeout to navigate after 2 seconds
    const timer = setTimeout(() => {
      props.navigation.replace("SIGN IN");
    }, 2000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <View>
      <Image
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: -1,
        }}
        source={require("../../assets/Barber3.jpg")}
      />

      <View
        style={{
          justifyContent: "flex-end",
          height: "100%",
          paddingBottom: 25,
          gap: 50,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            paddingHorizontal: 25,
          }}
        >
          <Text style={{ color: "white" }}>Welcome to</Text>
          <Text
            style={{
              fontSize: 55,
              color: "#1217a4",
              fontWeight: "bold",
            }}
          >
            Modifyz
          </Text>
          <Text style={{ color: "white" }}>
            The best barber & salon app in this century for your good looks and
            beauty
          </Text>
        </View>

        {/* <TouchableOpacity
          style={{ gap: 30, paddingHorizontal: 25 }}
          onPress={() => props.navigation.navigate("SIGN IN")}
        >
          <Text style={style.button}>NEXT</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Welcome;

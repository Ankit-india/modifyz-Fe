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

const ProfilePrivacyPolicy = (props) => {
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
          <View style={{ gap: 15 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              1. Types of Data We Collect
            </Text>
            <Text style={{ color: "grey" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </Text>
          </View>

          <View style={{ gap: 15 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              2. Use of Your Personal Data
            </Text>
            <Text style={{ color: "grey" }}>
              Quisque auctor orci neque, ac vestibulum libero rutrum sed. Duis
              fermentum odio lectus, quis luctus odio interdum id. Ut bibendum,
              leo eu fringilla molestie, risus ex vehicula massa, vitae rhoncus
              metus erat nec neque. Donec imperdiet neque vel ex pulvinar
              sagittis. Sed hendrerit, ante eget fringilla lacinia, elit dolor
              hendrerit felis, at consequat massa felis eget magna. Curabitur
              auctor eleifend blandit. In hac habitasse platea dictumst. Quisque
              vel mi vel mauris dictum mollis. Integer pulvinar pulvinar tempor.
              Nullam tempor sodales facilisis. Proin et sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum
            </Text>
          </View>

          <View style={{ gap: 15 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              3. Disclosure of Your Personal Data
            </Text>
            <Text style={{ color: "grey" }}>
              Aliquam rhoncus neque vitae mi varius, id facilisis justo cursus.
              Suspendisse consectetur interdum consectetur. Cras et dictum urna,
              sit amet finibus neque. Donec vehicula eros nisl, nec ullamcorper
              eros hendrerit at. Aenean iaculis, quam eu imperdiet rutrum, elit
              dolor euismod mauris, in porta nisi quam ac justo. Donec viverra
              sem quis condimentum semper. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Curabitur pulvinar sollicitudin
              lectus quis ullamcorper. Aenean non interdum justo. Aenean auctor
              est pretium tristique ullamcorper. Etiam vel accumsan mauris, in
              vulputate diam. Quisque auctor orci neque, ac vestibulum libero
              rutrum sed. Duis fermentum odio lectus, quis luctus odio interdum
              id. Ut bibendum, leo eu fringilla molestie, risus ex vehicula
              massa, vitae rhoncus metus erat nec neque. Donec imperdiet neque
              vel ex pulvinar sagittis. Sed hendrerit, ante eget fringilla
              lacinia, elit dolor hendrerit felis, at consequat massa felis eget
              magna. Curabitur auctor eleifend blandit. In hac habitasse platea
              dictumst. Quisque vel mi vel mauris dictum mollis. Integer
              pulvinar pulvinar tempor. Nullam tempor sodales facilisis. Proin
              dictum dolor ac hendrerit fermentum. Nunc egestas nunc a semper
              malesuada. Morbi semper mi convallis, aliquam felis ut, mollis ex.
              Donec feugiat pellentesque ante, viverra euismod diam condimentum
              eget.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfilePrivacyPolicy;

import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import style from "../styles/style";
import InboxData from "./InboxData";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const InboxChatCard = ({ data }) => {
  const links = InboxData;
  return (
    <>
      {links.map((value) => {
        return (
          <TouchableOpacity
            key={value.id}
            // onPress={() => data.navigation.navigate("Barber", { id: value.id })}
          >
            <View
              key={value.id}
              style={{
                gap: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ flexDirection: "row", gap: 15, alignItems: "center" }}
              >
                <Image
                  style={{ height: 50, width: 50, borderRadius: 50 }}
                  source={{
                    uri: value.img,
                  }}
                />
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    {value.name}
                  </Text>
                  <Text style={{ color: "grey" }}>{value.message}</Text>
                </View>
              </View>

              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    backgroundColor: "#1217a4",
                    color: "#fff",
                    borderRadius: 50,
                  }}
                >
                  {value.number}
                </Text>
                <Text>{value.date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default InboxChatCard;

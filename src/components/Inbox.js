import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import style from "../styles/style";
import { Ionicons } from "@expo/vector-icons";
import InboxChatCard from "./InboxChatCard";
import InboxCallCard from "./InboxCallCard";

const Inbox = (props) => {
  const [isToggled, setIsToggled] = useState(true);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <View style={style.home.headingContainer}>
            <Text style={style.home.headingContainerTextFirst}>Inbox</Text>
            <View style={{ display: "flex", flexDirection: "row", gap: 30 }}>
              <Text style={style.home.headingContainerTextSecond}>
                <Ionicons name="search-outline" size={24} color="black" />
              </Text>

              <Text
                style={style.home.headingContainerTextSecond}
                onPress={() => props.navigation.navigate("My Bookmark")}
              >
                <Ionicons
                  name="ellipsis-horizontal-circle"
                  size={24}
                  color="black"
                />
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => setIsToggled(true)}
            >
              <Text
                style={{
                  backgroundColor: "#1217a4",
                  borderRadius: 30,
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 15,
                  paddingVertical: 10,
                }}
              >
                Chats
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => setIsToggled(false)}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "#1217a4",
                  borderRadius: 30,
                  textAlign: "center",
                  color: "#1217a4",
                  fontWeight: "bold",
                  fontSize: 15,
                  paddingVertical: 8,
                }}
              >
                Calls
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ borderWidth: 0.3, borderColor: "grey" }} />

          {isToggled ? (
            <InboxChatCard data={props} />
          ) : (
            <InboxCallCard data={props} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Inbox;

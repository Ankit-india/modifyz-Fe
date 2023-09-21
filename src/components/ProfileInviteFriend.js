import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import style from "../styles/style";

const ProfileInviteFriend = ({ data }) => {
  const [inviteToggle, setInviteToggle] = useState(false);

  const links = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
  ];
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
          {links.map((value) => {
            return (
              <TouchableOpacity
                key={value.id}
                onPress={() => setInviteToggle(!inviteToggle)}
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
                    style={{
                      flexDirection: "row",
                      gap: 15,
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{ height: 50, width: 50, borderRadius: 50 }}
                      source={{
                        uri: "https://cdn2.vectorstock.com/i/1000x1000/76/11/logo-a-neon-sign-for-a-hairdresser-and-barbershop-vector-18857611.jpg",
                      }}
                    />
                    <View>
                      <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                        Lauralee Quintero
                      </Text>
                      <Text style={{ color: "grey" }}>+1-202-555-0171</Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    onPress={() => setInviteToggle(!inviteToggle)}
                  >
                    <Text
                      style={{
                        backgroundColor: inviteToggle ? "white" : "#1217a4",
                        borderRadius: 30,
                        color: inviteToggle ? "#1217a4" : "white",
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                      }}
                    >
                      {inviteToggle ? "Invited" : "Invite"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileInviteFriend;

import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Profile from "./Profile";
import Explore from "./Explore";
import MyBooking from "./MyBooking";
import Inbox from "./Inbox";
import { Ionicons, AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <SimpleLineIcons name="home" size={20} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <SimpleLineIcons name="location-pin" size={20} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="My Booking"
          component={MyBooking}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <AntDesign name="filetext1" size={20} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={Inbox}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <AntDesign name="message1" size={20} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Ionicons name="md-person-outline" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNav;

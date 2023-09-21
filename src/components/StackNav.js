import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./Welcome";
import Signup from "./Signup";
import Signin from "./Signin";
import SigninWithPassword from "./SigninWithPassword";
import DetailForm from "./DetailForm";
import TabNav from "./TabNav";
import MyBookmark from "./MyBookmark";
import All from "./All";
import Haircuts from "./Haircuts";
import MakeUp from "./MakeUp";
import Manicure from "./Manicure";
import Massage from "./Massage";
import NearbyLocation from "./NearbyLocation";
import MostPopular from "./MostPopular";
import OurSpecialist from "./OurSpecialist";
import Barber from "./Barber";
import OurServices from "./OurServices";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Package from "./Package";
import Gallery from "./Gallery";
import ProfileNotification from "./ProfileNotification";
import ProfileEdit from "./ProfileEdit";
import ProfileSecurity from "./ProfileSecurity";
import ProfileLanguage from "./ProfileLanguage";
import ProfilePrivacyPolicy from "./ProfilePrivacyPolicy";
import ProfileInviteFriend from "./ProfileInviteFriend";
import NumberOtp from "./NumberOtp";

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="WELCOME">
        <Stack.Screen
          name="WELCOME"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SIGN IN"
          component={Signin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OTP"
          component={NumberOtp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SIGN UP"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SIGN IN WITH PASWORD"
          component={SigninWithPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Fill Your Profile"
          component={DetailForm}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="/"
          component={TabNav}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="My Bookmark"
          component={MyBookmark}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="All"
          component={All}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Haircuts"
          component={Haircuts}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Make up"
          component={MakeUp}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Manicure"
          component={Manicure}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="About us"
          component={AboutUs}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Services"
          component={Services}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Package"
          component={Package}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Gallery"
          component={Gallery}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Massage"
          component={Massage}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Nearby Your Location"
          component={NearbyLocation}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Most Popular"
          component={MostPopular}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Our Specialist"
          component={OurSpecialist}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Our Services"
          component={OurServices}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Barber"
          component={Barber}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Edit Profile"
          component={ProfileEdit}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Notification"
          component={ProfileNotification}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Security"
          component={ProfileSecurity}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Language"
          component={ProfileLanguage}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Privacy Policy"
          component={ProfilePrivacyPolicy}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Invite Friends"
          component={ProfileInviteFriend}
          options={
            {
              // headerShown: false,
            }
          }
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNav;

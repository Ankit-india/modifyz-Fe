import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import style from "../styles/style";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  SimpleLineIcons,
} from "@expo/vector-icons";

// import ProfileData from "./ProfileData";

const Profile = (props) => {
  // let profileData = ProfileData;
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={[style.container, { gap: 27 }]}>
          <View style={style.home.headingContainer}>
            <Text style={style.home.headingContainerTextFirst}>Profile</Text>
            <View style={{ display: "flex", flexDirection: "row", gap: 30 }}>
              <Text style={style.home.headingContainerTextSecond}>
                <Ionicons name="search-outline" size={24} />
              </Text>

              <Text
                style={style.home.headingContainerTextSecond}
                onPress={() => props.navigation.navigate("My Bookmark")}
              >
                <Ionicons name="ellipsis-horizontal-circle" size={24} />
              </Text>
            </View>
          </View>

          <View style={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Image
              style={{ height: 100, width: 100, borderRadius: 50 }}
              source={{
                uri: "https://cdn2.vectorstock.com/i/1000x1000/76/11/logo-a-neon-sign-for-a-hairdresser-and-barbershop-vector-18857611.jpg",
              }}
            />
            <Text style={style.home.headingContainerTextFirst}>
              Daniel Austin
            </Text>
            <Text>daneil_austin@yourdomain.com</Text>
          </View>

          <View style={{ borderWidth: 0.2, borderColor: "grey" }} />

          {/* Map Start */}
          {/* {profileData.map((value) => (
            <View style={style.profile.cardContainer}>
              <View style={style.profile.insideCardContainer}>
                {value.nameIcon}
                <Text style={style.profile.text}>{value.name}</Text>
              </View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate(value.link)}
              >
                {value.arrow}
              </TouchableOpacity>
            </View>
          ))} */}
          {/* Map End */}

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Edit Profile")}
          >
            <View style={style.profile.cardContainer}>
              <View style={style.profile.insideCardContainer}>
                <Ionicons name="person-outline" size={20} />
                <Text style={style.profile.text}>Edit Profile</Text>
              </View>
              <MaterialCommunityIcons name="greater-than" size={18} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Notification")}
          >
            <View style={style.profile.cardContainer}>
              <View style={style.profile.insideCardContainer}>
                <Ionicons name="notifications-outline" size={20} />
                <Text style={style.profile.text}>Notification</Text>
              </View>
              <MaterialCommunityIcons name="greater-than" size={18} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={style.profile.cardContainer}>
              <View style={style.profile.insideCardContainer}>
                <Ionicons name="wallet-outline" size={20} />
                <Text style={style.profile.text}>Payment</Text>
              </View>
              <MaterialCommunityIcons name="greater-than" size={18} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Security")}
          >
            <View style={style.profile.cardContainer}>
              <View style={style.profile.insideCardContainer}>
                <MaterialIcons name="verified-user" size={20} />
                <Text style={style.profile.text}>Security</Text>
              </View>
              <MaterialCommunityIcons name="greater-than" size={18} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Language")}
          >
            <View style={style.profile.cardContainer}>
              <View style={style.profile.insideCardContainer}>
                <MaterialIcons name="language" size={20} />
                <Text style={style.profile.text}>Language</Text>
              </View>
              <MaterialCommunityIcons name="greater-than" size={18} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleToggle}>
            <View style={style.profile.cardContainer}>
              <View style={style.profile.insideCardContainer}>
                <Ionicons name="eye-outline" size={20} />
                <Text style={style.profile.text}>Dark Mode</Text>
              </View>
              <FontAwesome
                name={isToggled ? "toggle-on" : "toggle-off"}
                size={25}
                color={isToggled ? "#1217a4" : "grey"}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Privacy Policy")}
          >
            <View style={style.profile.cardContainer}>
              <View style={style.profile.insideCardContainer}>
                <Ionicons name="lock-closed-outline" size={20} />

                <Text style={style.profile.text}>Privacy Policy</Text>
              </View>
              <MaterialCommunityIcons name="greater-than" size={18} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Invite Friends")}
          >
            <View style={style.profile.cardContainer}>
              <View style={style.profile.insideCardContainer}>
                <SimpleLineIcons name="people" size={20} />
                <Text style={style.profile.text}>Invite Friends</Text>
              </View>
              <MaterialCommunityIcons name="greater-than" size={18} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={style.profile.cardContainer}>
              <View style={style.profile.insideCardContainer}>
                <MaterialCommunityIcons name="logout" size={20} />
                <Text style={style.profile.text}>Logout</Text>
              </View>
              <MaterialCommunityIcons name="greater-than" size={18} />
            </View>
          </TouchableOpacity>

          {/*  */}
          <View>
            {/* style={styles.centeredView} */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                }}
              >
                <View style={styles.modalView}>
                  <View style={{ display: "flex", gap: 25 }}>
                    <Text
                      style={{
                        color: "red",
                        fontSize: 27,
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Logout
                    </Text>

                    <View
                      style={{ borderWidth: 0.3, borderColor: "grey", flex: 1 }}
                    />

                    <Text
                      style={{
                        fontSize: 22,
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Are you sure you want to logout?
                    </Text>
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
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={style.button}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ flex: 1 }}
                      onPress={() =>
                        props.navigation.navigate("SIGN IN WITH PASWORD")
                      }
                    >
                      <Text style={style.button}>Yes, Logout</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          {/*  */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 35,
    gap: 25,
  },
});

export default Profile;

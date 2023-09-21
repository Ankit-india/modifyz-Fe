import { StyleSheet, Platform, StatusBar } from "react-native";

const style = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    paddingHorizontal: 25,
    paddingBottom: 25,
    flex: 1,
    gap: 21,
    flexDirection: "column",
    // justifyContent: "space-between",
  },
  formContainer: {
    paddingHorizontal: 25,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 50,
    paddingTop: 70,
  },
  socialMediaContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 5,
    paddingVertical: 10,
    gap: 15,
  },
  inputFieldContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 40,
    borderRadius: 5,
  },
  textInputField: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  button: {
    backgroundColor: "#1217a4",
    borderRadius: 30,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    paddingVertical: 15,
  },
  or: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
  },
  flexCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  color: {
    color: "#1217a4",
    fontWeight: "bold",
  },
  forgetPassColor: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "#1217a4",
  },

  // CommonLink Component Style
  commonLink: {
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    text: {
      color: "#1217a4",
      fontWeight: "bold",
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 7,
      borderColor: "#1217a4",
      borderWidth: 1.5,
    },
    textWithBGColor: {
      color: "white",
      fontWeight: "bold",
      backgroundColor: "#1217a4",
      borderRadius: 20,
      paddingHorizontal: 16.5,
      paddingVertical: 8.5,
    },
  },

  // CommonLinkBarber Component Style
  commonLinkBarber: {
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
    },
    text: {
      color: "#1217a4",
      fontWeight: "bold",
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 7,
      borderColor: "#1217a4",
      borderWidth: 1.5,
    },
    textWithBGColor: {
      color: "white",
      fontWeight: "bold",
      backgroundColor: "#1217a4",
      borderRadius: 20,
      paddingHorizontal: 16.5,
      paddingVertical: 8.5,
    },
  },

  // CommonLinkWithImage Component Style
  commonLinkWithImage: {
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    image: {
      height: 50,
      width: 50,
      borderRadius: 50,
    },
    text: { fontWeight: "bold", fontSize: 15 },
  },

  // Card Component Style
  card: {
    container: {
      gap: 20,
      flexDirection: "row",
      padding: 12.5,
    },
    image: {
      height: 80,
      width: 80,
      borderRadius: 10,
    },
    innerContainer: {
      justifyContent: "space-between",
    },
    textFirst: {
      fontWeight: "bold",
      fontSize: 15,
    },
    textSecond: { color: "grey" },
  },

  // CardBarber Component Style
  cardBarber: {
    container: {
      gap: 3,
      alignItems: "center",
      padding: 12.5,
      backgroundColor: "white",
    },
    image: {
      height: 75,
      width: 75,
      borderRadius: 10,
    },
    textFirst: {
      fontWeight: "bold",
      fontSize: 15,
    },
    textSecond: { color: "grey" },
  },

  // Barber Component Style
  barber: {
    container: {
      padding: 25,
      gap: 21,
    },
    image: {
      height: 275,
    },
    innerContainer: {
      flexDirection: "row",
    },
    openCloseButton: {
      backgroundColor: "#1217a4",
      borderRadius: 20,
      textAlign: "center",
      color: "white",
      paddingVertical: 8,
      paddingHorizontal: 18,
    },
  },

  // SeeAll Component Style
  seeAll: {
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    textFirst: {
      fontWeight: "bold",
      fontSize: 20,
    },
    textSecond: { color: "#1217a4", fontWeight: "bold" },
  },

  // Home Component Style
  home: {
    headingContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: 15,
    },
    headingContainerTextFirst: {
      fontSize: 24,
      fontWeight: 600,
    },
    headingContainerTextSecond: {
      fontSize: 20,
    },

    greetContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
    },
    greetContainerTextFirst: {
      fontSize: 30,
      fontWeight: "bold",
    },
    greetContainerTextSecond: {
      fontSize: 24,
      fontWeight: "bold",
    },
  },

  // Profile Component Style

  profile: {
    cardContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    insideCardContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 25,
    },
    text: {
      fontSize: 16,
      fontWeight: "bold",
    },
  },

  editProfile: {
    inputFieldContainer: {
      // paddingHorizontal: 10,
      paddingRight: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fafafa",
      height: 50,
      borderRadius: 5,
    },
  },
});

export default style;

import { Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

let ProfileData = [
  {
    nameIcon: <Ionicons name="person-outline" size={20} color="black" />,
    name: "Edit Profile",
    arrow: (
      <MaterialCommunityIcons name="greater-than" size={18} color="black" />
    ),
    link: "Edit Profile",
  },
  {
    nameIcon: <Ionicons name="notifications-outline" size={20} color="black" />,
    name: "Notification",
    arrow: (
      <MaterialCommunityIcons name="greater-than" size={18} color="black" />
    ),
    link: "Notification",
  },
  {
    nameIcon: <Ionicons name="wallet-outline" size={20} color="black" />,
    name: "Payment",
    arrow: (
      <MaterialCommunityIcons name="greater-than" size={18} color="black" />
    ),
    link: "Notification",
  },
  {
    nameIcon: <MaterialIcons name="verified-user" size={20} color="black" />,
    name: "Security",
    arrow: (
      <MaterialCommunityIcons name="greater-than" size={18} color="black" />
    ),
    link: "Security",
  },
  {
    nameIcon: <MaterialIcons name="language" size={20} color="black" />,
    name: "Language",
    arrow: (
      <MaterialCommunityIcons name="greater-than" size={18} color="black" />
    ),
    link: "Language",
  },
//   {
//     nameIcon: <Ionicons name="eye-outline" size={20} color="black" />,
//     name: "Dark Mode",
//     arrow: (
//         <FontAwesome
//         name={isToggled ? "toggle-on" : "toggle-off"}
//         size={30}
//         color={isToggled ? "#1217a4" : "grey"}
//       />
//     ),
//     link: "Dark Mode",
//   },
  {
    nameIcon: <SimpleLineIcons name="people" size={20} color="black" />,
    name: "Invite Friends",
    arrow: (
      <MaterialCommunityIcons name="greater-than" size={18} color="black" />
    ),
    link: "Invite Friends",
  },
//   {
//     nameIcon: <Ionicons name="person-outline" size={20} color="black" />,
//     name: "Edit Profile",
//     arrow: (
//       <MaterialCommunityIcons name="greater-than" size={18} color="black" />
//     ),
//     link: "Edit Profile",
//   },
];

export default ProfileData;

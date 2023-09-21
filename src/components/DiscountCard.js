import { View, Text, StyleSheet } from "react-native";
import React from "react";

const DiscountCard = () => {
  return (
    <View style={styles.card}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ gap: 6 }}>
          <Text style={{ color: "white" }}>30% OFF</Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: 500 }}>
            Today's Special
          </Text>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 40, fontWeight: "bold" }}>
            30%
          </Text>
        </View>
      </View>

      <View>
        <Text style={{ color: "white" }}>
          Get a discount for every service order!
        </Text>
        <Text style={{ color: "white" }}>Only valid for today</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1217a4",
    color: "white",
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderRadius: 30,
    gap: 15,
  },
});

export default DiscountCard;

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router"; // <-- use this

export default function Details() {
  const params = useLocalSearchParams(); // older version compatible
  const metal = params.metal;
  const data = params.data ? JSON.parse(decodeURIComponent(params.data)) : {};

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{metal} Details</Text>
      <Text>Price: {data.price} INR</Text>
      <Text>Timestamp: {data.timestamp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});

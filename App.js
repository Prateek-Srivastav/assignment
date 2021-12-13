import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SectionScreen from "./screens/SectionScreen";
import SeriesScreen from "./screens/SeriesScreen";

export default function App() {
  return <SeriesScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

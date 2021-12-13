import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

function Input({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc",
    borderRadius: 25,
    flexDirection: "row",
    width: "70%",
    padding: 7,
    marginVertical: 10,
  },
  textInput: {
    marginStart: 10,
    fontSize: 15,
  },
});

export default Input;

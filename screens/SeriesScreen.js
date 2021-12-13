import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import Input from "../components/Input";
import SectionScreen from "./SectionScreen";

function SeriesScreen() {
  const [index, setIndex] = useState();
  const [number, setNumber] = useState();
  const [showAnswer, setShowAnswer] = useState(false);
  const [showSeriesScreen, setShowSeriesScreen] = useState(true);

  const indexInputHandler = (enteredIndex) => {
    setIndex(enteredIndex);
    if (!enteredIndex) setShowAnswer(true);
  };

  const answerHandler = () => {
    if (index === 0 || index === "") {
      setShowAnswer(false);
      setNumber("Please enter a number.");
    } else if (index % 2 === 0) {
      const num = index * index - 1;
      setNumber(num);
    } else {
      const num = index * index + 1;
      setNumber(num);
    }
    setShowAnswer(true);
  };

  const switchScreen = () => {
    setShowSeriesScreen(false);
  };

  if (showSeriesScreen) {
    return (
      <View>
        <TouchableOpacity onPress={switchScreen}>
          <View style={styles.switchButton}>
            <Text style={{ textAlign: "center", fontSize: 16, color: "black" }}>
              Switch to section screen.
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.answerCard}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Input
              placeholder="Enter a number"
              onChangeText={indexInputHandler}
              value={index}
              keyboardType="numeric"
            />
            <TouchableOpacity onPress={answerHandler}>
              <View style={styles.calculateButton}>
                <Text style={{ textAlign: "center", fontSize: 16 }}>
                  CALCULATE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {showAnswer && (
            <View
              style={{
                flexDirection: "row",
                margin: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 19, fontWeight: "bold" }}>Answer: </Text>
              <Text style={{ fontSize: 18 }}>{number}</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
  return <SectionScreen />;
}

const styles = StyleSheet.create({
  container: {
    // margin: 60,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  switchButton: {
    borderRadius: 10,
    backgroundColor: "#41c1e8",
    padding: 10,
    marginTop: 50,
    marginHorizontal: 50,
    elevation: 5,
  },
  calculateButton: {
    borderRadius: 10,
    backgroundColor: "aqua",
    padding: 10,
    marginHorizontal: 10,
    elevation: 5,
  },
  answerCard: {
    marginTop: 30,
    padding: 25,
    elevation: 6,
    borderRadius: 10,
    borderColor: "#ccc",
    backgroundColor: "white",
    marginHorizontal: 10,
  },
});

export default SeriesScreen;

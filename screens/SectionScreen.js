import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Input from "../components/Input";
import SeriesScreen from "./SeriesScreen";

function SectionScreen(props) {
  const [sectionName, setSectionName] = useState();
  const [sections, setSections] = useState([]);
  const [lectureName, setLectureName] = useState();
  const [lectures, setLectures] = useState([]);
  const [showSeriesScreen, setShowSeriesScreen] = useState(false);

  const sectionInputHandler = (enteredSectionName) => {
    setSectionName(enteredSectionName);
  };

  const lectureInputHandler = (enteredLectureName) => {
    setLectureName(enteredLectureName);
  };

  const addSectionHandler = () => {
    setSections((currentSectionNames) => [
      ...currentSectionNames,
      { key: Math.random().toString(), value: sectionName },
    ]);
    setSectionName();
  };
  const addLectureHandler = () => {
    setLectures((currentLectureNames) => [
      ...currentLectureNames,
      { key: Math.random().toString(), value: lectureName },
    ]);
    setLectureName();
  };

  const switchScreen = () => {
    setShowSeriesScreen(true);
  };

  if (showSeriesScreen) return <SeriesScreen />;

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={switchScreen}>
        <View style={styles.switchButton}>
          <Text style={{ textAlign: "center", fontSize: 16, color: "black" }}>
            Switch to series screen.
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Section Name"
            onChangeText={sectionInputHandler}
            value={sectionName}
          />
          <TouchableOpacity onPress={addSectionHandler}>
            <View style={styles.addButton}>
              <Ionicons name="add" size={26} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <FlatList
            data={sections}
            renderItem={(itemData) => (
              <View style={styles.sectionContainer}>
                <View style={styles.sectionName}>
                  <Text style={styles.sectionText}>{itemData.item.value}</Text>
                </View>
                <FlatList
                  data={lectures}
                  renderItem={(itemData) => (
                    <View>
                      <Text style={styles.lectureText}>
                        {itemData.item.value}
                      </Text>
                    </View>
                  )}
                />
                <View style={styles.lectureContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Lecture Name"
                    onChangeText={lectureInputHandler}
                    value={lectureName}
                  />
                  <TouchableOpacity onPress={addLectureHandler}>
                    <View style={styles.addButton}>
                      <Ionicons name="add" size={24} />
                    </View>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => {}}>
                  <View style={styles.saveButton}>
                    <Text style={{ textAlign: "center", fontSize: 16 }}>
                      SAVE
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    backgroundColor: "aqua",
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    margin: 10,
    width: "80%",
  },
  switchButton: {
    borderRadius: 10,
    backgroundColor: "#41c1e8",
    padding: 10,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 50,
    elevation: 5,
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    padding: 20,
    backgroundColor: "white",
    padding: 10,
  },
  sectionContainer: {
    padding: 20,
    elevation: 6,
    borderRadius: 10,
    borderColor: "#ccc",
    backgroundColor: "white",
    marginVertical: 20,
    marginHorizontal: 5,
  },
  sectionText: {
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "center",
  },
  lectureText: {
    fontSize: 17,
    paddingTop: 10,
    left: 10,
  },
  lectureContainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  saveButton: {
    borderRadius: 10,
    backgroundColor: "aqua",
    padding: 8,
    elevation: 5,
  },
});

export default SectionScreen;

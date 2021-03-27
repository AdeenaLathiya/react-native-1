import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { InputForm } from "./InputForm";

export default function App() {
  const data = [
    { text: "Item1", id: "1" },
    { text: "Item2", id: "2" },
    { text: "Item3", id: "3" },
    { text: "Item4", id: "4" },
    { text: "Item5", id: "5" },
    { text: "Item9", id: "6" },
    { text: "Item7", id: "7" },
    { text: "Item8", id: "8" },
    { text: "Item9", id: "9" },
    { text: "Item10", id: "10" },
    { text: "Item2", id: "2" },
    { text: "Item13", id: "13" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello World</Text>
      <InputForm />
      <FlatList
        numColumns={3}
        data={data}
        renderItem={({ item }) => <Text style={styles.list}>{item.text}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
  },
  list: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: "#000",
    color: "#fff",
    marginVertical: 5,
    marginHorizontal: 5,
  },
});

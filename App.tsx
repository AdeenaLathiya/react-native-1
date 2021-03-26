import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { InputForm } from "./InputForm";

export default function App() {
  const data = [
    { text: "Item1", id: "1" },
    { text: "Item2", id: "2" },
    { text: "Item3", id: "3" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello World</Text>
      <InputForm />
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.text}</Text>}
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
});

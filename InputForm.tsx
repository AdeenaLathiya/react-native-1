import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export const InputForm = () => {
  const [text, setText] = useState("");
  console.log(text);
  return (
    <View>
      <TextInput
        placeholder="Enter input"
        onChangeText={(val) => setText(val)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
    borderWidth: 2,
    height: 35,
    borderRadius: 10,
    paddingLeft: 5,
  },
});

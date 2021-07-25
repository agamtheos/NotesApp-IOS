import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialUnderlineTextbox5(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="Name"
        autoCapitalize="characters"
        returnKeyType="done"
        style={styles.inputName}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  inputName: {
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8
  }
});

export default MaterialUnderlineTextbox5;

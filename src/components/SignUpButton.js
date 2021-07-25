import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function SignUpButton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.getStarted}>Get Started</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFCC00"
  },
  getStarted: {
    color: "rgba(76,69,69,1)",
    fontSize: 17,
    width: 89,
    height: 20
  }
});

export default SignUpButton;

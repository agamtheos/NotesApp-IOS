import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function SigninButton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text 
        style={styles.signin}
        >Signin</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFCC00",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  signin: {
    color: "rgba(76,69,69,1)",
    fontSize: 17,
    width: 54,
    height: 20
  }
});

export default SigninButton;

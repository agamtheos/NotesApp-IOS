import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import PasswordSignup from "../components/signin/PasswordSignin";
import ReTypePasswordForm from "../components/ReTypePasswordForm";
import SignUpButton from "../components/SignUpButton";
import EmailSignup from "../components/signin/EmailSignin";
import NameSignup from "../components/NameSignup";

function Signup(props) {
  return (
    <View style={styles.container}>
      <PasswordSignup
        style={styles.passwordSignup}
      ></PasswordSignup>
      <ReTypePasswordForm style={styles.rePasswordSignup}></ReTypePasswordForm>
      <SignUpButton style={styles.signupButton}></SignUpButton>
      <View style={styles.nameAppSignup}>
        <Text style={styles.notesApp}>Notes App</Text>
        <Text style={styles.byAt}>by AT</Text>
      </View>
      <EmailSignup
        style={styles.emailSignup}
      ></EmailSignup>
      <NameSignup
        style={styles.nameSignup}
      ></NameSignup>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  passwordSignup: {
    height: 43,
    width: 294,
    marginTop: 406,
    marginLeft: 41
  },
  rePasswordSignup: {
    height: 43,
    width: 294,
    marginTop: 12,
    marginLeft: 41
  },
  signupButton: {
    height: 44,
    width: 262,
    marginTop: 61,
    marginLeft: 57
  },
  nameAppSignup: {
    width: 207,
    height: 74,
    marginTop: -477,
    marginLeft: 84
  },
  notesApp: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    textAlign: "left",
    fontSize: 42
  },
  byAt: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12,
    marginLeft: 174
  },
  emailSignup: {
    height: 43,
    width: 294,
    marginTop: 142,
    marginLeft: 41
  },
  nameSignup: {
    height: 43,
    width: 294,
    marginTop: -94,
    marginLeft: 41
  }
});

export default Signup;

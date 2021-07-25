import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import SigninButton from "../components/signin/SigninButton";
import EmailSignin from "../components/signin/EmailSignin";
import PasswordSignin from "../components/signin/PasswordSignin";



function Signin(props) {
  return (
    <View style={styles.container}>
      <SigninButton style={styles.signinButton}>
      </SigninButton>
      <View style={styles.nameAppSignin}>
        <Text style={styles.notesApp2}>Notes App</Text>
        <Text style={styles.byAt1}>by AT</Text>
      </View>
      <EmailSignin
        style={styles.EmailSignin}
      ></EmailSignin>
      <PasswordSignin
        style={styles.passwordSignin}
      ></PasswordSignin>
      <View style={styles.createAccContainer1}>
        <Text style={styles.createAccount}>Create Account</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  signinButton: {
    height: 44,
    width: 255,
    marginTop: 507,
    marginLeft: 60
  },
  nameAppSignin: {
    width: 207,
    height: 74,
    marginTop: -388,
    marginLeft: 84
  },
  notesApp2: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    textAlign: "left",
    fontSize: 42
  },
  byAt1: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    fontSize: 12,
    marginLeft: 173
  },
  EmailSignin: {
    height: 43,
    width: 289,
    marginTop: 111,
    marginLeft: 47
  },
  passwordSignin: {
    height: 43,
    width: 289,
    marginTop: 15,
    marginLeft: 47
  },
  createAccContainer1: {
    width: 113,
    height: 32,
    backgroundColor: "#E6E6E6",
    marginTop: 127,
    marginLeft: 131
  },
  createAccount: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 7,
    marginLeft: 9
  }
});

export default Signin;
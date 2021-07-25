import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";



function ReTypePasswordForm(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="Re-Type Password"
        maxLength={16}
        secureTextEntry={true}
        returnKeyType="done"
        onSubmit={this.handleSubmit}
        style={styles.inputRePasswd}
      ></TextInput>
      <Icon name="eye" style={styles.iconStyle}></Icon>
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
  inputRePasswd: {
    color: "#000",
    paddingRight: 16,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 14,
    paddingBottom: 8
  },
  iconStyle: {
    color: "#616161",
    fontSize: 24,
    paddingRight: 8
  }
});

export default ReTypePasswordForm;

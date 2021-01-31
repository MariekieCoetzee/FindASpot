import React, { useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";
import * as Linking from "expo-linking";

const PhoneNr = ({ item }) => {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <View>
      <TouchableOpacity
        style={styles.rowStyle}
        onPress={() => {
          Linking.openURL(`tel://${item.phone}`).catch(() => {
            setErrorMessage("Unable to open Dial app");
          });
        }}
      >
        <Icon name="phone" style={styles.iconStyle} />

        <Text style={styles.textStyle}>{item.display_phone}</Text>
      </TouchableOpacity>
      {errorMessage != "" ? (
        <Text style={styles.errorStyle}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    marginTop: 5,
  },
  textStyle: {
    marginTop: 5,
    marginLeft: 5,
    textAlign: "left",
    fontSize: 12,
    paddingTop: 10,
    color: "black",
  },
  iconStyle: {
    textAlign: "right",
    overflow: "hidden",
    backgroundColor: "green",
    borderColor: "darkgreen",
    color: "white",
    //borderTopLeftRadius:50,
    borderRadius: 18,
    padding: 10,
    marginTop: 5,
    fontSize: 15,
  },
  errorStyle: {
    color: "red",
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 15,
  },
});

export { PhoneNr };

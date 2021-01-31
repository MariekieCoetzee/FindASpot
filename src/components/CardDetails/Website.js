import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Linking from "expo-linking";

const Website = ({ item }) => {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <View>
      <TouchableOpacity
        style={styles.touchStyle}
        onPress={() => {
          //webUrl(item.url);
          Linking.openURL(`${item.url}`).catch(() => {
            setErrorMessage("Unable to open browser");
          });
        }}
      >
        <Icon name="yelp" style={styles.iconStyle} />
        <Text style={styles.readMoreStyle}>Read More on </Text>
        <Text style={styles.yelpStyle}> Yelp</Text>
      </TouchableOpacity>
      {errorMessage != "" ? (
        <Text style={styles.errorStyle}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  touchStyle: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignContent:"center",
    color: "white",
    borderRadius: 14,
    backgroundColor: "red",
  },
  iconStyle: {
    padding: 8,
    color: "white",
    fontSize: 22,
  },
  readMoreStyle: {
    color: "white",
    paddingTop: 10,
    textAlign: "center",
  },
  yelpStyle: {
    fontWeight: "600",
    paddingTop: 10,
    marginRight:10,
    fontStyle: "italic",
  },
  errorStyle: {
    color: "red",
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 15,
  },
});

export { Website };

import React from "react";
import { Text, Stylesheet, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Distance = ({ item }) => {
  return (
    <View style={styles.rowStyle}>
      <Icon name="map-marker-distance" style={styles.iconStyle} />
      <Text style={styles.textStyle}>{(item.distance/1000).toFixed(2)} km</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "space-between",
  },
  textStyle: {
    marginTop: 10,
    textAlign: "left",
    fontSize: 12,
    paddingLeft: 10,
    color: "grey",
  },
  iconStyle: {
    overflow: "hidden",
    backgroundColor: "white",
    color: "grey",
    // padding: 10,
    marginTop: 10,
    fontSize: 20,
  },
});

export { Distance };

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Linking from "expo-linking";

const Location = ({ item }) => {

  return (
    <View>
      <TouchableOpacity style={styles.rowStyle}
        onPress={() => {
          Linking.openURL(`${item.url}#directions`).catch(() => {
            setErrorMessage("Unable to open browser");
          })}}
      >
        <Icon name="map-pin" style={styles.iconStyle} /> 
        <View style={{marginTop: 10}}>
        {item.location.display_address.map((address, i) => {
          return <Text key={i} style={styles.textStyle}>{address}</Text>;
        })}
      </View>
      </TouchableOpacity>
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
    fontSize: 10,
    marginLeft:5,
    //padding: 10,
    color: "black",
  },
  iconStyle: {
    overflow: "hidden",
    textAlign:"center",
    alignSelf:"center",
    backgroundColor: "orange",
    color: "white",
    borderRadius: 18,
    padding: 10,
    marginTop: 10,
    fontSize: 15,
  },
});
export { Location };

/* eslint-disable prettier/prettier */
import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { FASBackDrop } from "../../images";

const { width, height } = Dimensions.get("screen");
const Feedback = ({ type, message, info }) => {
  return (
    <ImageBackground source={FASBackDrop} style={{ width, height }}>
      {type === "load" && (
        <View style={styles.indicatorBoxStyle}>
          <ActivityIndicator
            style={styles.indicatorStyle}
            color="#000"
            size="large"
          />
        </View>
      )}
      {type !=="load" && (
      <View style={styles.messageBoxStyle}>
        {type !== "load" && (
          <Text style={styles.messageStyle}> {message} </Text>
        )}
        {info && (
        <Text style={styles.infoStyle}> {info} </Text>)}
      </View>)}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "#fffdf8",
    height,
  },
  indicatorStyle: {
    alignSelf: "center",
    marginBottom: 15,
  },
  indicatorBoxStyle: {
    marginTop: 200,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 300,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  messageBoxStyle: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.7)",
    marginTop: 200,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    alignSelf:"center",
    justifyContent: "center",
    alignItems: "center",
  },
  messageStyle: {
    fontSize: 25,
    marginLeft: 10,
    flex: 1,
    alignSelf:"center",
    color: "#333333",
    textAlign:"center",
    fontWeight: "400",
  },
  infoStyle: {
    fontStyle: "italic",
    fontSize: 20,
    marginLeft: 10,

    flex: 1,
    color: "#333333",
    marginTop: 50,
  },
  imageStyle: {
    position: "relative",
  },
});

export default Feedback;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { FASwelcome } from "../images";
const { width, height } = Dimensions.get("screen");

const WelcomeScreen = ({ navigation }) => {
  return (
    
    <TouchableOpacity
      style={styles.containerStyle}
      onPress={() => {
        navigation.navigate("search");
      }}
    ><Image source={FASwelcome} style={{width, height}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor:"#fffdf8",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    height: height,
  },
  imageStyle: {
    flex: 1,
    alignSelf: "center",
    position: "absolute",
  },
});

export default WelcomeScreen;

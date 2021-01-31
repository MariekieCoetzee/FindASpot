import React from "react";
import * as Stars from "../../images";
import { View, Text, StyleSheet, Image, Platform } from "react-native";

const Rating = ({ item }) => {
  const ratingStar = () => {
    switch (item.rating) {
      case 0:
        return Platform.OS === "ios" ? (
          <Image source={Stars.IosdZeroStar} />
        ) : (
          <Image source={Stars.androidZeroStar} />
        );
      case 1:
        return Platform.OS === "ios" ? (
          <Image source={Stars.iosdOneStar} />
        ) : (
          <Image source={Stars.androidOneStar} />
        );
      case 1.5:
        return Platform.OS === "ios" ? (
          <Image source={Stars.iosdOneHalfStar} />
        ) : (
          <Image source={Stars.androidOneHalfStar} />
        );
      case 2:
        return Platform.OS === "ios" ? (
          <Image source={Stars.iosdTwoStar} />
        ) : (
          <Image source={Stars.androidTwoStar} />
        );
      case 2.5:
        return Platform.OS === "ios" ? (
          <Image source={Stars.iosdTwoHalfStar} />
        ) : (
          <Image source={Stars.androidTwoHalfStar} />
        );
      case 3:
        return Platform.OS === "ios" ? (
          <Image source={Stars.iosdThreeStar} />
        ) : (
          <Image source={Stars.androidThreeStar} />
        );
      case 3.5:
        return Platform.OS === "ios" ? (
          <Image source={Stars.iosdThreeHalfStar} />
        ) : (
          <Image source={Stars.androidThreeHalfStar} />
        );
      case 4:
        return Platform.OS === "ios" ? (
          <Image source={Stars.iosdFourStar} />
        ) : (
          <Image source={Stars.androidFourStar} />
        );
      case 4.5:
        return Platform.OS === "ios" ? (
          <Image source={Stars.iosdFourHalfStar} />
        ) : (
          <Image source={Stars.androidFourHalfStar} />
        );
      case 5:
        return Platform.OS === "ios" ? (
          <Image source={Stars.iosdFiveStar} />
        ) : (
          <Image source={Stars.androidFiveStar} />
        );
      default:
        return Platform.OS === "ios" ? (
          <Image source={Stars.iosdZeroStar} />
        ) : (
          <Image source={Stars.androidZeroStar} />
        );
    }
  };
  return (
    <View style={styles.rowStyle}>
      {ratingStar()}
      <Text style={styles.textStyle}>{item.rating} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "space-between",
  },
  textStyle: {
    marginLeft:5,
    fontSize: 11,
    color: "black",
    textAlign: "center",
  },
});

export { Rating };

import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { PhoneNr, Rating, Location, Distance, Website, Categories } from "../CardDetails";

const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;

const CardDetail = ({ item, navigation,currentLocation }) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.rowStyle}>
        <Text style={styles.headerStyle}>{item.name}</Text>
      </View>
      {((item.review_count && typeof item.review_count !== "undefined") ||
        item.review_count !== "") && <Rating item={item} />}
      {((item.url && typeof item.url !== "undefined") || item.url !== "") && (
        <Website item={item} />
      )}
      {item.categories &&
        typeof item.categories !== "undefined" &&
        typeof item.categories.item !== "undefined" && (
          <Categories item={item.categories} />
        )}
      {((item.display_phone && typeof item.display_phone !== "undefined") ||
        item.display_phone !== "") && <PhoneNr item={item} />}
      {typeof item.location !== "undefined" &&
        typeof item.location.display_address[0] != "undefined" && (
          <Location item={item} navigation={navigation} currentLocation={currentLocation}/>
        )}
      {((item.distance && typeof item.distance !== "undefined") ||
        item.distance !== "") && <Distance item={item} />}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
width: ITEM_SIZE * 0.7,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  rowStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 8,
  },
  headerStyle: {
    flexWrap: "wrap",
    fontWeight: "bold",
    textAlign: "center",
    padding: 8,
  },
});

export default CardDetail;

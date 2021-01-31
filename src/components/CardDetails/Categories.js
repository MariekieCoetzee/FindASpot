import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Categories = (categories) => {
  return (
    <View style={styles.viewStyle}>
      {categories.item.map((i, index) => {
        return <Text key={index} style={styles.textStyle}>{i.title}</Text>;
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "space-evenly",
flexWrap:"wrap",
    flexDirection: "row",
    marginTop:10
  },
  textStyle: {
    color: "grey",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    padding: 4,
    margin: 2,
    fontSize: 12,
  },
});

export { Categories };

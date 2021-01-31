// Inspired by Catalin Miron
// https://www.youtube.com/watch?v=yV-2HRzNX9o
import * as React from "react";
import {
  FlatList,
  View,
  Dimensions,
  Animated,
  Image,
  Platform,
  StyleSheet,
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import { FASBackDrop} from "../../images";

const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;

const BACKDROP_HEIGHT = height * 0.65;

const BackDrop = ({ data, scrollX }) => {
  return (
    <View style={styles.viewStyle}>
      <FlatList
        data={data.reverse()}
        horizontal
        key={(item) => item.key + "-backdrop"}
        keyExtractor={(item) => item.key + "-backdrop"}
        removeClippedSubviews={false}
        contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
        renderItem={({ item, index }) => {

          //const inputRange ;
          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [0, width],
          });
          return (
            <Animated.View
              removeClippedSubviews={false}
              style={{
                position: "absolute",
                width: translateX,
                height,
                overflow: "hidden",
              }}
            >
          {typeof item.image_url !== "undefined" &&
          item.image_url !== "" ? (
            <Image
            source={{ uri: item.image_url }}
            style={styles.imageStyle}
          />
          ) : (
            <Image
            source={FASBackDrop}
            style={styles.imageStyle}
          />
          )}

            </Animated.View>
          );
        }}
      />

      <LinearGradient
        colors={['transparent', '#FFFFFF']}
       style={styles.linearStyle}
      />
    </View>  );
};

const styles = StyleSheet.create({
  linearStyle: {
    width,
    height: BACKDROP_HEIGHT,
    position: "absolute",
    bottom: 0,
  },
  imageStyle: {
    width,
    height: BACKDROP_HEIGHT,
    position: "absolute",
  },
  viewStyle: {
    position: "absolute",
    width,
    height: BACKDROP_HEIGHT,
  },
});
export default BackDrop;

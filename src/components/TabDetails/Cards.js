// Inspired by Catalin Miron
// https://www.youtube.com/watch?v=yV-2HRzNX9o
import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  StatusBar,
  Platform,
  Image,
} from "react-native";
import BackDrop from "./BackDrop";
import CardDetail from "./CardDetail";
import Icon from "react-native-vector-icons/Feather";

const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;
const SPACING = 10;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

const Cards = ({ items }) => {
  // sorting toggles, workaround to enforce ascending distance order
  items.sort((a, b) => { return parseFloat(b.distance) - parseFloat(a.distance) });
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <BackDrop data={items} scrollX={scrollX} />
      <Animated.FlatList
        horizontal
        data={items}
        showsHorizontalScrollIndicator={false}
        key={(item) => item.key + "aDetail"}
        keyExtractor={(item) => item.key + "aDetail"}
        snapToInterval={ITEM_SIZE}
        decelerationRate={0.98}
        snapToAlignment="start"
        renderToHardwareTextureAndroid
        contentContainerStyle={{ alignItems: "center" }}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          if (!item.name) {
            return <View style={{ width: SPACER_ITEM_SIZE }} />;
          }
          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [80, 20, 80],
            extrapolate: "clamp",
          });
          return (
            <View style={{ width: ITEM_SIZE, height }}>
              <Animated.View
                style={{
                  marginHorizontal: SPACING,
                  padding: SPACING,
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 34,
                  transform: [{ translateY }],
                }}
              >
                {typeof item.image_url !== "undefined" &&
                item.image_url !== "" ? (
                  <Image
                    style={styles.imageStyle}
                    source={{ uri: item.image_url }}
                  />
                ) : (
                  <View style={styles.iconBoxStyle}>
                    <Icon style={styles.iconStyle} name="image" />
                    <Text style={styles.noImageStyle}>No Image Available</Text>
                  </View>
                )}
                <CardDetail item={item} size={ITEM_SIZE} />
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 34,
  },
  iconBoxStyle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: ITEM_SIZE * 0.9,
    backgroundColor: "rgb(192,192,192)",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 5,
  },
  noImageStyle: {
    marginTop: 15,
    color: "white",
  },
  iconStyle: {
    fontSize: 55,
    color: "white",
  },
  imageStyle: {
    height: ITEM_SIZE * 0.9,
    width: "100%",
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 5,
  },
  body: {
    fontSize: 20,
    textAlign: "center",
  },
});
export default Cards;

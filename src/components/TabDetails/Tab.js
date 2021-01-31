import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const Tab = ({ onTabClick, item, index, dataLength, selectedIndex}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{ marginBottom: 10 }}
      onPress={() => {
        onTabClick(item, index);
      }}
    >
      <View>
        <Text
          style={{
            fontSize: dataLength ==1? 42: 84 / dataLength,
            paddingTop: 8,
            textAlign: "center",
            fontWeight: index === selectedIndex ? "600" : "400",
            color: index === selectedIndex ? "#D4AF37" : "silver",
            textTransform: "uppercase",
          }}
        >
          {item.key}
        </Text>
        <Text
          style={{
            fontSize: dataLength ==1? 15: 35 / dataLength,
            textAlign: "center",
            color: index === selectedIndex ? "#D4AF37" : "silver",
            textTransform: "uppercase",
          }}
        >
          {item.description}
        </Text>
       {index === selectedIndex && <Text style={{ height: 4, backgroundColor: "#D4AF37" }} />}
      </View>
    </TouchableOpacity>
  );
};

export default Tab;

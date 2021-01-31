// Inspired by Catalin Miron
// https://www.youtube.com/watch?v=ZiSN9uik6OY

import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import Cards from "./Cards";
import Tab from "./Tab";

const Tabs = ({ results}) => {
  if (results.length === 0 || !results) {
    return null;
  }
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentKey, setCurrentKey] = useState(0);
  const [currentItems, setCurrentItems] = useState(results[0].items);

  const containerRef = useRef();

  //updating state with new selection
  function onTabClick(item, index) {
    setCurrentIndex(index);
    setCurrentKey(item.key);
    setCurrentItems(item.items);
  }

  return (
    <View style={{ backgroundColor: "white" }}>
      <View ref={containerRef} style={styles.rowStyle}>
        {results.map((i, index) => {
        if(i.items.length > 0) {
          return (
            <Tab
              key={index}
              onTabClick={onTabClick}
              item={i}
              index={index}
              selectedIndex={currentIndex}
              dataLength={results.length}
            />
          );
          }
        })}
      </View>

      <Cards key={currentKey} items={currentItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexGrow: 1,
  },
  rowStyle: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white",
  },
});

export default Tabs;

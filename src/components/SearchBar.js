import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Feedback from "./common/Feedback";
import Icon from "react-native-vector-icons/Feather";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  const [changeText, setChangeText] = useState(false);
const msgInfo ="Search examples : hairdresser, car, nightclub, icecream, shoes, fish, chicken etc..";
const msgConfirm ="Press enter to start searching";
  return (
    <View>
      <View style={styles.backgroundStyle}>
        <Icon name="search" color="gray" style={styles.iconStyle} />
        <TextInput
          value={term}
          onChangeText={(newTerm) => {
            onTermChange(newTerm);
            setChangeText(true);
          }}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder="pizza"
          onEndEditing={() => {
            onTermSubmit();
            setChangeText(false);
          }}
        />
      </View>
      {changeText ? <Feedback message={msgConfirm} info={msgInfo} /> : null} 
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 1,
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
  iconStyle: {
    fontSize: 25,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;

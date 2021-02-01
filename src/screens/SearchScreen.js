import React, { useState } from "react";
import { ScrollView, View, RefreshControl } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import Tabs from "../components/TabDetails/Tabs";
import Feedback from "../components/common/Feedback";
import AppLoading from "expo-app-loading";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  const [
    searchApi,
    results,
    errorMessage,
    searchLocation,
    locationPermission,
  ] = useResults();

  const onRefresh = ((searchLocation) => {
         setTerm("");
         searchApi(term, searchLocation);
    });

  return (
    <View>
      {locationPermission ? (
        <SearchBar
          term={term}
          onTermChange={setTerm}
          error={errorMessage}
          onTermSubmit={() => {
            searchApi(term, searchLocation);
          }}
        />
      ) : null}
      {errorMessage ? <Feedback message={errorMessage} /> : null}
      {results.length == 0 ? (
        <Feedback type="load" message={"Loading..."} />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          refreshControl={
            <RefreshControl onRefresh={()=> {onRefresh(searchLocation); } }/>
          }
        >
          <View>
            <Tabs results={results}/>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default SearchScreen;

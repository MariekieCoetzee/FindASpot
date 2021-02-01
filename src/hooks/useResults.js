import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import * as Location from "expo-location";
import * as helpers from "../helpers";

export default () => {
  const [searchLocation, setSearchLocation] = useState(null);
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [locationPermission, setLocationPermission] = useState(false);

  const searchApi = async (searchTerm, searchLocation) => {
    setErrorMessage(null);
    setResults([]);
    if (!searchLocation) {
      setErrorMessage(
        "Location is missing. Please ensure that permission is granted to device location"
      );
      return [searchApi, results, errorMessage, searchLocation];
    }
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm === "" ? "pizza" : searchTerm,
          latitude: searchLocation.latitude,
          longitude: searchLocation.longitude,
          radius: 10000,
        },
      }).catch(function (error) {
        console.log('inside catch block.');
        if (error.response) {
          setResults([]);
          setErrorMessage("Something went wrong, Please search again.");
        } else if (error.request) {
          etResults([]);
          setErrorMessage("Something went wrong, Please search again.");
        } else {
          setResults([]);
          setErrorMessage("Something went wrong, Please search again.");
        }
        console.log(JSON.stringify(error));
      });
      //no data
      if(!response.data){
        setResults([]);
        setErrorMessage("Something went wrong, Please search again.");
      }else if(!response.data.businesses) {
        setResults([]);
        setErrorMessage("Something went wrong, Please search again.");
      } else 
      if (response.data.businesses.length === 0) {
        setResults([]);
        setErrorMessage("No matches found...");
        return [searchApi, results, errorMessage, searchLocation];
      }
  
      //data found - create group per price
      const groupList = helpers.groupResults(response.data.businesses);

      //add keys needed in cards
      const data = helpers.addKeys(groupList);

      //Add spacers for backdrop and animation
      helpers.addSpacers(data);

      //Sort categories
      data.sort((a, b) => (a[0] < b[0] ? -1 : 1));

      //Add Category descriptions, sort items by distance while create ref for categories to be used in animation
      const dataRef = helpers.addRef(data);

      //Set state
      setResults(dataRef);
    } catch (err) {
      setErrorMessage("Something went wrong, please search again ..." + err);
    }
  };

  // get current location only when app started.
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMessage(
          "Permission to access device location was denied.  Please enable location permission and launch application again."
        );
        setLocationPermission(false);
        return;
      } else setLocationPermission(true);

      let currentLocation = await Location.getCurrentPositionAsync({})
        .then((position) => {
          if (position) {
            let letSearchLocation = position.coords;
            setSearchLocation(letSearchLocation);
            setErrorMessage(null);
            searchApi("pizza", letSearchLocation);
          }
        })
        .catch((err) => {
          setErrorMessage("there was an error " + err);
        });
    })();
  }, []);
  //part 2
  return [searchApi, results, errorMessage, searchLocation, locationPermission];
};

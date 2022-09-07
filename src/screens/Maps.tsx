import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Location from "expo-location";
import { LocationObject } from "expo-location";

const MapsComponent = () => {
  const [location, setLocation] = useState<LocationObject>();
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    console.log("useEffect");
    const getLocation = async () => {
      console.log("getLocation");
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      fetch(
        "https://maps.googleapis.com/maps/api/geocode/json?address=" +
          location.coords.latitude +
          "," +
          location.coords.longitude +
          "&key=" +
          "AIzaSyAlvFAONWOcSwRhArBfWgbUDE6CejF4H98"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(
            "ADDRESS GEOCODE is BACK!! => " + JSON.stringify(responseJson)
          );
        });

      const addressString = `${address[0].name}, ${address[0].street}, ${address[0].postalCode}, ${address[0].city}`;
      console.log(`address`, address);

      setLocation(location);
    };
    getLocation();
  }, []);

  console.log(`location`, location);
  return (
    <View style={styles.container}>
      {location?.coords && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
        >
          <Marker
            title="Home"
            draggable
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapsComponent;

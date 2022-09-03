import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Location from "expo-location";
import { LocationObject } from "expo-location";

const MapsComponent = () => {
  const [location, setLocation] = useState<LocationObject>();
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  console.log(`location`, location);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        // initialRegion={{
        //   latitude: location?.coords.latitude ?? 0,
        //   longitude: location?.coords.longitude ?? 0,
        //   latitudeDelta: 0.09,
        //   longitudeDelta: 0.04,
        // }}
      />
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
    width: 300,
    height: 300,
  },
});

export default MapsComponent;

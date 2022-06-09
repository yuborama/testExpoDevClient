import React, { FC } from "react";
import { StyleProp, ViewStyle } from "react-native";
import MapView from "react-native-maps";

interface ATomMapType {
  latitude: number;
  longitude: number;
  style?: StyleProp<ViewStyle> | undefined;
}


function AtomMap({ latitude, longitude, style }: ATomMapType) {
  return (
    <MapView
      style={style}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04,
      }}
    />
  );
}

const ATomMap: FC<ATomMapType> = (props) => {
  const { latitude, longitude, style } = props;
  return (
    <MapView
      style={style}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04,
      }}
    />
  );
};
export default ATomMap;

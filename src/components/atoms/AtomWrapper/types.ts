import { StyleProp, ViewStyle } from "react-native";
import { FlattenSimpleInterpolation } from "styled-components";

export type AtomWrapperTypes = {
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  border?: string;
  width?: string;
  padding?: number | string;
  margin?: string;
  height?: string;
  alignItems?: "center" | "flex-start" | "flex-end";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  customCSS?: FlattenSimpleInterpolation;
  borderBottomColor?: string;
  borderBottomWidth?: string;
  marginTop?: string;
  flexDirection?: "row" | "column";
  marginHorizontal?: string;
  marginVertical?: string;
  style?: StyleProp<ViewStyle> | undefined;
};

export type AtomWrapperProps = AtomWrapperTypes;

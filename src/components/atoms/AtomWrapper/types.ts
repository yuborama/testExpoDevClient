import { CWT } from "@types";
import { ViewProps } from "react-native";
import { FlattenSimpleInterpolation } from "styled-components";

export type AtomWrapperTypes = {
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  border?: string;
  width?: string;
  padding?: string;
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
};

export type AtomWrapperProps = CWT<ViewProps, AtomWrapperTypes>;

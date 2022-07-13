import type { TextProps } from "react-native";
import { FlattenSimpleInterpolation } from "styled-components";

export type TextStyle = {
  fontSize?: string;
  fontWeight?: string | number;
  color?: string;
  children?: React.ReactNode;
  margin?: string;
  width?: string;
  fontFamily?: string;
  customCSS?: FlattenSimpleInterpolation;
  textAlign?: "left" | "center" | "right";
};

export type AtomTextProps = TextProps & TextStyle;

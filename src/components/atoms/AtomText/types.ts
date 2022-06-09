import type { TextProps } from "react-native";

export type TextStyle = {
  color?: string;
  fontSize?: string;
  children?: React.ReactNode
};

export type AtomTextProps = TextProps & TextStyle;

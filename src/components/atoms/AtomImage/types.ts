import { DefaultTheme } from "styled-components/native";
import { FlattenSimpleInterpolation, ThemedCssFunction } from "styled-components";
import { CWT } from "@types";

import type { ImageProps } from "react-native";
export type AtomImageType = {
  customBorderRadius?: string;
  customWidth?: string;
  customPadding?: string;
  customHeight?: string;
  customBorder?: string;
  customMargin?: string;
  customCSS?: FlattenSimpleInterpolation;
};

export type AtomImageProps = CWT<ImageProps, AtomImageType>;

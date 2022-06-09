import styled, { css } from "styled-components/native";
import { AtomImageType } from "./types";

// export const ImageStyle = styled.Image<AtomImageType>(
//   {(props) => css`
//     display: flex;
//     border-radius: ${props?.borderRadius ?? 0};
//     width: ${props?.width ?? "100%"};
//     height: ${props?.height ?? "100%"};
//     padding: ${props?.padding ?? 0};
//     margin: ${props?.margin ?? 0};
//     border: ${props?.border ?? "none"};
//     ${props?.customCSS}}
//   `
// );

// export const ImageStyle = styled.Image<AtomImageType>((props) => css``);
/* border-radius: ${({ customBorderRadius }) => customBorderRadius ?? 0};
width: ${({ customWidth }) => customWidth ?? "100%"};
height: ${({ customHeight }) => customHeight ?? "100%"};
padding: ${({ customPadding }) => customPadding ?? 0};
margin: ${({ customMargin }) => customMargin ?? 0};
border: ${({ customBorder }) => customBorder ?? "none"};
${({ customCSS }) => customCSS} */

export const ImageStyle = styled.Image<AtomImageType>`
  border-radius: ${({ customBorderRadius }) => customBorderRadius ?? 0};
  width: ${({ customWidth }) => customWidth ?? "100%"};
  height: ${({ customHeight }) => customHeight ?? "100%"};
  padding: ${({ customPadding }) => customPadding ?? 0};
  margin: ${({ customMargin }) => customMargin ?? 0};
  ${({ customCSS }) => customCSS}
`;
// display: flex;

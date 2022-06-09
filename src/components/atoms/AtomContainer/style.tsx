import styled, { css } from "styled-components/native";
import { AtomWrapperProps } from "../AtomWrapper/types";


const aaaa = css``


export const ContainerStyle = styled.View<AtomWrapperProps>(
  (props) => css`
    flex: 1;
    display: flex;
    justify-content: ${props?.justifyContent ?? "flex-start"};
    align-items: ${props?.alignItems ?? "flex-start"};
    background-color: ${props?.backgroundColor ?? "transparent"};
    border-radius: ${props?.borderRadius ?? 0};
    width: ${props?.width ?? "100%"};
    height: ${props?.height ?? "100%"};
    padding: ${props?.padding ?? 0};
    margin: ${props?.margin ?? 0};
    border: ${props?.border ?? "none"};
  `
);

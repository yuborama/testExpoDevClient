import styled, { css } from 'styled-components/native';
import { AtomWrapperTypes } from '../AtomWrapper/types';

export const AtomButton = styled.TouchableOpacity<AtomWrapperTypes>(
  (props) => css`
    display: flex;
    justify-content: ${props?.justifyContent ?? 'flex-start'};
    align-items: ${props?.alignItems ?? 'flex-start'};
    background-color: ${props?.backgroundColor ?? "transparent"};
    border-radius: ${props?.borderRadius ?? '5px'};
    width: ${props?.width ?? '100%'};
    height: ${props?.height ?? 'auto'};
    padding: ${props?.padding ?? 0};
    margin: ${props?.margin ?? 0};
    border: ${props?.border ?? 'none'};
    ${props?.customCSS}
  `
);

export default AtomButton;
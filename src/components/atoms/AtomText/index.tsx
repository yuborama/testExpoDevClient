import styled, { css } from 'styled-components/native';
import { AtomTextProps } from './types';

export const AtomText = styled.Text<AtomTextProps>(
  (props) => css`
    font-size: ${props?.fontSize ?? '16px'};
    font-weight: ${props?.fontWeight ?? 'normal'};
    color: ${props?.color ?? '#111111'};
    margin: ${props?.margin ?? '0'};
  `
);

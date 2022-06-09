import { FC } from "react";
import { AtomWrapperProps } from "./types";
import { WrapperStyle } from "./style";

const AtomWrapper: FC<AtomWrapperProps> = (props) => (
  <WrapperStyle {...props}>{props.children}</WrapperStyle>
);

export default AtomWrapper;

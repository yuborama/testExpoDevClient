import { FC } from "react";
import { AtomWrapperProps } from "../AtomWrapper/types";
import { ContainerStyle } from "./style";

const AtomContainer: FC<AtomWrapperProps> = (props) => {
  const { children } = props;
  return (
    <ContainerStyle {...props}>
      {children}
    </ContainerStyle>
  );
};
export default AtomContainer;

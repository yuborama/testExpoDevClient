import React, { FC } from "react";
import { TextSyle } from "./style";

interface AtomTextType {}

const AtomText: FC<AtomTextType> = (props) => {
  const { children } = props;
  return <TextSyle {...props}>{children}</TextSyle>;
};
export default AtomText;

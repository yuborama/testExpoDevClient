import { FC } from "react";
import { ImageStyle } from "./style";
import { AtomImageProps } from "./types";

const AtomImage: FC<AtomImageProps> = (props) => {
  const { url } = props;
  return <ImageStyle {...props} source={{ uri: url }} />;
};
export default AtomImage;

import React, { FC } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styled, { css } from "styled-components/native";
import AtomWrapper from "../../atoms/AtomWrapper";
import { AtomWrapperTypes } from "../../atoms/AtomWrapper/types";

interface MoleculeCardTaskType {
  text: string;
  image: ImageSourcePropType;
  onPress?: () => void;
}

const ButtonAtom = styled.TouchableOpacity<AtomWrapperTypes>(
  (props) => css`
    display: flex;
    justify-content: ${props?.justifyContent ?? "flex-start"};
    align-items: ${props?.alignItems ?? "flex-start"};
    background-color: ${props?.backgroundColor ?? "transparent"};
    border-radius: ${props?.borderRadius ?? 0};
    width: ${props?.width ?? "100%"};
    height: ${props?.height ?? "auto"};
    padding: ${props?.padding ?? 0};
    margin: ${props?.margin ?? 0};
    border: ${props?.border ?? "none"};
    ${props?.customCSS}
  `
);

const CustomStyles = css`
  align-items: center;
  justify-content: center;
  background-color: #167bd8;
  height: 150px;
  width: 150px;
  border-radius: 15px;
`;

const MoleculeCardTask: FC<MoleculeCardTaskType> = (props) => {
  const { text, image, onPress } = props;
  return (
    <ButtonAtom
      onPress={onPress}
      customCSS={css`
        width: 40%;
        margin-top: 20px;
      `}
      style={styles.container}
    >
      <AtomWrapper customCSS={CustomStyles}>
        <Image style={styles.image} source={image} />
      </AtomWrapper>
      <Text style={styles.text}>{text}</Text>
    </ButtonAtom>
  );
};
export default MoleculeCardTask;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  text: {
    fontSize: 16,
  },
});

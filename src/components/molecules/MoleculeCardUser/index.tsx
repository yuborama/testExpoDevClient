import { Icon } from "@rneui/themed";
import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";
import { css } from "styled-components/native";
import { ImageStyle } from "../../atoms/AtomImage/style";
import { TextSyle } from "../../atoms/AtomText/style";
import AtomWrapper from "../../atoms/AtomWrapper";

interface MoleculeCardAnimalType {
  name?: string;
  document?: string;
  tel?: string;
  location?: string;
}

const MoleculeCardAnimal: FC<MoleculeCardAnimalType> = (props) => {
  const { document, tel, location, name } = props;
  return (
    <AtomWrapper
      customCSS={css`
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 5px;
        padding: 10px;
        border: 1px solid #cdcdcd;
        border-radius: 25px;
        width: 98%;
      `}
    >
      <AtomWrapper width="95%">
        <AtomWrapper backgroundColor="#ef586b" height="30px" width="30px"/>
      </AtomWrapper>
    </AtomWrapper>
  );
};
export default MoleculeCardAnimal;

const Styles = StyleSheet.create({
  container: {},
  name: {
    fontSize: 20,
    color: "#167BD8",
  },
  document: {
    fontSize: 15,
    color: "#64707D",
  },
  typeanimal: {
    fontSize: 10,
    color: "#64707D",
  },
  telefono: {
    fontSize: 12,
    color: "#64707D",
  },
  location: {
    fontSize: 15,
    color: "#2E2E2E",
  },
});

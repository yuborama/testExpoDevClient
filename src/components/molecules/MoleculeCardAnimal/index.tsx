import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";
import { css } from "styled-components/native";
import { ImageStyle } from "../../atoms/AtomImage/style";
import { TextSyle } from "../../atoms/AtomText/style";
import AtomWrapper from "../../atoms/AtomWrapper";

interface MoleculeCardAnimalType {
  url?: string;
  name?: string;
  typeanimal?: string;
  race?: string;
  owner?: string;
  ccOwner?: string;
  location?: string;
}

const MoleculeCardAnimal: FC<MoleculeCardAnimalType> = (props) => {
  const { ccOwner, location, name, owner, race, url, typeanimal } = props;
  return (
    <AtomWrapper
      customCSS={css`
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 5px;
        padding: 5px;
        border: 1px solid #cdcdcd;
        border-radius: 25px;
        width: 98%;
      `}
    >
      <AtomWrapper
        width="20%"
        alignItems="center"
        justifyContent="center"
        customCSS={css`
          padding: 0 20px;
        `}
      >
        <ImageStyle
          customWidth="70px"
          customHeight="70px"
          style={{
            borderRadius: 45,
          }}
          source={{ uri: url }}
        />
      </AtomWrapper>
      <AtomWrapper width="80%">
        <Text style={Styles.name}>{name}</Text>
        <TextSyle style={Styles.race}>{race}</TextSyle>
        <TextSyle style={Styles.typeanimal}>{typeanimal}</TextSyle>
        <TextSyle style={Styles.dataOwner}>
          Dueño {owner} CC {ccOwner}
        </TextSyle>
        <TextSyle style={Styles.location}>{location}</TextSyle>
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
  race: {
    fontSize: 15,
    color: "#64707D",
  },
  typeanimal: {
    fontSize: 10,
    color: "#64707D",
  },
  dataOwner: {
    fontSize: 12,
    color: "#64707D",
  },
  location: {
    fontSize: 15,
    color: "#2E2E2E",
  },
});

import { Icon } from "@rneui/themed";
import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";
import { css } from "styled-components/native";
import Colors from "../../../constants/Colors";
import AtomIcon from "../../atoms/AtomIcon";
import { ImageStyle } from "../../atoms/AtomImage/style";
import { AtomText } from "../../atoms/AtomText";
import { TextSyle } from "../../atoms/AtomText/style";
import AtomWrapper from "../../atoms/AtomWrapper";

interface MoleculeCardUserType {
  name?: string;
  document?: string;
  tel?: string;
  location?: string;
}

const MoleculeCardUser: FC<MoleculeCardUserType> = (props) => {
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
        <AtomText color={Colors.light.secondary}>{name}</AtomText>
        <AtomText color={Colors.light.tertiary}>C.C. {document}</AtomText>
        <AtomText color={Colors.light.tertiary}>Telefono: {tel}</AtomText>

        <AtomWrapper flexDirection="row">
          <AtomIcon
            uri="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/Cheisi/Icons/location.svg"
            color="#167BD8"
            height="15px"
            width="15px"
            style={{
              paddingTop: 5,
            }}
          />
          <AtomText style={{
            paddingLeft: 5,
          }}>{location}</AtomText>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};
export default MoleculeCardUser;

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

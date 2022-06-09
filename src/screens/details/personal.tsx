import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import styled, { css } from "styled-components/native";
import AtomWrapper from "../../components/atoms/AtomWrapper";
import { AtomWrapperTypes } from "../../components/atoms/AtomWrapper/types";
import { Icon } from "@rneui/themed";

const Save = styled.SafeAreaView`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px;
  width: 100%;
`;

const data = {
  name: "Juan Daniel Garcia Peña",
  document: "1090347567",
  tel: "3123078935",
  email: "Juandanielgarciapena@email.com",
  direction: "Calle 1 #24-7 barrio cualquiera ciudad de por ahi",
  rol: "Administrador",
};
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

const Detailpersonal: FC = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Save>
        <ButtonAtom
          customCSS={css`
            flex-direction: row;
          `}
        >
          <Icon name="chevron-left" color="#4684BE" size={35} />
          <Icon type="font-awesome" name="paw" color="#4684BE" size={25} />
        </ButtonAtom>
        <AtomWrapper
          customCSS={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
          `}
        >
          <Text style={{ ...Styles.label, color: "#000000" }}>Detalle del</Text>
          <Text style={{ ...Styles.label, color: "#000000" }}>{data.rol}</Text>
        </AtomWrapper>
        <AtomWrapper
          customCSS={css`
            justify-content: center;
            margin: 5px;
            padding: 5px;
            border: 1px solid #cdcdcd;
            border-radius: 25px;
            width: 98%;
            padding: 20px;
          `}
        >
          <Text style={Styles.label}>Nombre</Text>
          <Text style={Styles.data}>{data.name}</Text>
          <AtomWrapper
            customCSS={css`
              flex-direction: row;
            `}
          >
            <AtomWrapper width="50%">
              <Text style={Styles.label}>Documento</Text>
              <Text style={Styles.data}>{data.document}</Text>
            </AtomWrapper>
            <AtomWrapper width="50%">
              <Text style={Styles.label}>Teléfono</Text>
              <Text style={Styles.data}>{data.tel}</Text>
            </AtomWrapper>
          </AtomWrapper>
          <Text style={Styles.label}>Correo Electronico</Text>
          <Text style={Styles.data}>{data.email}</Text>
          <Text style={Styles.label}>Dirección</Text>
          <Text style={Styles.data}>{data.direction}</Text>
          <Text style={Styles.label}>Rol de usuario</Text>
          <Text style={Styles.data}>{data.rol}</Text>
        </AtomWrapper>
        <AtomWrapper
          customCSS={css`
            flex-direction: row;
            align-items: center;
          `}
        >
          <ButtonAtom
            customCSS={css`
              width: 60%;
              background-color: #28c825;
              height: 40px;
              border-radius: 15px;
              justify-content: center;
              align-items: center;
            `}
            onPress={() => {
              console.log("hola");
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "700",
              }}
            >
              Editar
            </Text>
          </ButtonAtom>
          <ButtonAtom
            onPress={() => {
              console.log("Delete admin");
            }}
          >
            <Icon name="delete" color={"red"} size={35} />
          </ButtonAtom>
        </AtomWrapper>
      </Save>
    </View>
  );
};
export default Detailpersonal;

const Styles = StyleSheet.create({
  label: {
    fontSize: 20,
    color: "#167BD8",
    fontWeight: "bold",
    marginTop: 5,
  },
  data: {
    fontSize: 16,
    color: "#64707D",
  },
});

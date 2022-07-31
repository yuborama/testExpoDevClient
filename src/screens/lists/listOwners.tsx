import React, { FC } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import styled, { css } from "styled-components/native";
import AtomWrapper from "../../components/atoms/AtomWrapper";
import { AtomWrapperTypes } from "../../components/atoms/AtomWrapper/types";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { navigationScreenProp } from "../../../stack";
import MoleculeCardUser from "../../components/molecules/MoleculeCardUser";

const dataUser = [
  {
    name: "Juan Daniel Garcia Peña",
    document: "1090347567",
    tel: "3123078935",
    location: "Calle 1 #24-7 barrio cualquiera ciudad de por ahi",
  },
  {
    name: "Angie Gabriela Montes Ruiz",
    document: "1090147567",
    tel: "3123078935",
    location: "Calle 1 #24-7 barrio cualquiera ciudad de por ahi",
  },
  {
    name: "Ulises Carlos Cardenas Inui",
    document: "1090347367",
    tel: "3123078935",
    location: "Calle 1 #24-7 barrio cualquiera ciudad de por ahi",
  },
  {
    name: "Andres Antonio Leon Perez",
    document: "1090347565",
    tel: "3123078935",
    location: "Calle 1 #24-7 barrio cualquiera ciudad de por ahi",
  },
  {
    name: "Alberto Beltran Rodriguez",
    document: "1093347565",
    tel: "3123078935",
    location: "Calle 1 #24-7 barrio cualquiera ciudad de por ahi",
  },
  {
    name: "Lucy Antolines San Martin",
    document: "1090347465",
    tel: "3123078935",
    location: "Calle 1 #24-7 barrio cualquiera ciudad de por ahi",
  },
];

const Save = styled.SafeAreaView`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px;
  width: 100%;
`;

const ButtonAtom = styled.TouchableOpacity<AtomWrapperTypes>(
  (props) => css`
    display: flex;
    justify-content: ${props?.justifyContent ?? "flex-start"};
    align-items: ${props?.alignItems ?? "flex-start"};
    background-color: ${props?.backgroundColor ?? "transparent"};
    border-radius: ${props?.borderRadius ?? 0};
    width: ${props?.width ?? "auto"};
    height: ${props?.height ?? "auto"};
    padding: ${props?.padding ?? 0};
    margin: ${props?.margin ?? 0};
    border: ${props?.border ?? "none"};
    ${props?.customCSS}
  `
);

const ListOwner: FC = () => {
  const navigation = useNavigation<navigationScreenProp>();
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Save>
        <AtomWrapper
          customCSS={css`
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <ButtonAtom
            customCSS={css`
              flex-direction: row;
              align-items: center;
            `}
            onPress={() => {
              navigation.navigate("home");
            }}
          >
            <Icon name="chevron-left" color="#4684BE" size={35} />
            <Icon type="font-awesome" name="paw" color="#4684BE" size={25} />
          </ButtonAtom>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Lista de Dueños
          </Text>
          <Icon name="search" color="#4684BE" size={35} />
        </AtomWrapper>
        <ScrollView>
          {dataUser.map((item) => (
            <MoleculeCardUser key={item.document} {...item} />
          ))}
        </ScrollView>

        <Icon
          type="material-community"
          name="plus"
          color="#442484"
          reverse
          containerStyle={Styles.btnContainer}
          onPress={() => {
            navigation.navigate("formUser");
          }}
        />
      </Save>
    </View>
  );
};
export default ListOwner;

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
  btnContainer: {
    position: "absolute",
    bottom: 60,
    right: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
  },
});

import React, { FC } from "react";
// import styled, { css } from "@emotion/native";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import AtomContainer from "../components/atoms/AtomContainer";
import AtomWrapper from "../components/atoms/AtomWrapper";
import { TextSyle } from "../components/atoms/AtomText/style";
import MoleculeCardAnimal from "../components/molecules/MoleculeCardAnimal";
import AtomImage from "../components/atoms/AtomImage";
import MoleculeCardUserDetail from "../components/molecules/MoleculeCardUserDetail";
import styled from "styled-components/native";

const pets = [
  {
    name: "Cariñosito",
    race: "Bulldog",
    owner: "Luis Arias",
    ccOwner: "12.2123123.2131123",
    location: "Calle 13 Direccion 2123 #42345",
    url: "https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg",
  },
  {
    name: "Cariñito",
    race: "pitbull",
    owner: "Luis Arias",
    ccOwner: "12.2123123.2131123",
    location: "Calle 13 Direccion 2123 #42345",
    url: "https://www.petmd.com/sites/default/files/styles/article_image/public/heat-stroke-dogs.jpg?itok=Coc987zl",
  },
  {
    name: "botas",
    race: "egipcio",
    owner: "Luis Arias",
    ccOwner: "12.2123123.2131123",
    location: "Calle 13 Direccion 2123 #42345",
    url: "https://www.petmd.com/sites/default/files/styles/article_image/public/heat-stroke-dogs.jpg?itok=Coc987zl",
  },
  {
    name: "Lucas",
    race: "",
    owner: "Luis Arias",
    ccOwner: "12.2123123.2131123",
    location: "Calle 13 Direccion 2123 #42345",
    url: "https://www.petmd.com/sites/default/files/styles/article_image/public/heat-stroke-dogs.jpg?itok=Coc987zl",
  },
  {
    name: "loki",
    race: "pitbull",
    owner: "Luis Arias",
    ccOwner: "12.2123123.2131123",
    location: "Calle 13 Direccion 2123 #42345",
    url: "https://www.petmd.com/sites/default/files/styles/article_image/public/heat-stroke-dogs.jpg?itok=Coc987zl",
  },
  {
    name: "mordisquitos",
    race: "pitbull",
    owner: "Luis Arias",
    ccOwner: "12.2123123.2131123",
    location: "Calle 13 Direccion 2123 #42345",
    url: "https://www.petmd.com/sites/default/files/styles/article_image/public/heat-stroke-dogs.jpg?itok=Coc987zl",
  },
  {
    name: "willy",
    race: "pitbull",
    owner: "Luis Arias",
    ccOwner: "12.2123123.2131123",
    location: "Calle 13 Direccion 2123 #42345",
    url: "https://www.petmd.com/sites/default/files/styles/article_image/public/heat-stroke-dogs.jpg?itok=Coc987zl",
  },{
    name: "Katti",
    race: "pitbull",
    owner: "Luis Arias",
    ccOwner: "12.2123123.2131123",
    location: "Calle 13 Direccion 2123 #42345",
    url: "https://www.petmd.com/sites/default/files/styles/article_image/public/heat-stroke-dogs.jpg?itok=Coc987zl",
  },
  {
    name: "meta",
    race: "pitbull",
    owner: "Luis Arias",
    ccOwner: "12.2123123.2131123",
    location: "Calle 13 Direccion 2123 #42345",
    url: "https://www.petmd.com/sites/default/files/styles/article_image/public/heat-stroke-dogs.jpg?itok=Coc987zl",
  },
];

const Save = styled.SafeAreaView`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  /* background-color: bisque; */
  align-items: center;
  /* padding: 10px; */
  width: 100%;
`;

const UserPage: FC = () => {
  return (
    <AtomContainer>
      <Save>
        <MoleculeCardUserDetail
          name="Juan Daniel Garcia Peña"
          ccOwner="1090347567"
          tel="3123078935"
          email="Juandanielgarciapena@email.com"
          location="Calle 1 #24-7 barrio cualquiera ciudad de por ahi"
          observation="En caso de que tenga alguna observarcion "
        />
        <Text style={styles.text}>Mascotas a cargo</Text>
        <ScrollView style={styles.container}>
          {pets.map((item, i) => (
            <MoleculeCardAnimal key={i} {...item} />
          ))}
        </ScrollView>
      </Save>
    </AtomContainer>
  );
};
export default UserPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    // marginTop: 50,
    paddingRight: 10,
  },
  text: {
    padding: 5,
    fontSize: 24,
    fontWeight: "400",
  },
});

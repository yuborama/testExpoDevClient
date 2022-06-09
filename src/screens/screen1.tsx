import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components/native";
import { ExploreStackParams, navigationScreenProp } from "../../stack";
import { TextSyle } from "../components/atoms/AtomText/style";
// import AtomImage from "../components/atoms/AtomImage";
import AtomWrapper from "../components/atoms/AtomWrapper";

const CustomStyles = css`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

const Save = styled.SafeAreaView`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 10px;
  /* background-color: bisque; */
  align-items: flex-start;
  width: 100%;
`;

const data = {
  owner: "Juan Daniel Garcia Peña",
  size: "Mediano",
  color: "Blanco",
  sterilized: true,
  sterilizedLocation: "en Perritos sin güevitas",
  silvestre: true,
  ccOwner: "1090347567",
  id: "1090765456-1",
  age: "2 meses",
  diseases: ["Enfermedad 1", "Enfermedad 2"],
  createdAt: "2020-06-01T00:00:00.000Z",
  direction: "Calle 1 Barrio Centro",
  location: "Casco Urbano",
  observations: "En caso de que tenga alguna observarcion",
  latitude: 33.640411,
  longitude: -84.419853,
};


export default function App() {
  const navigation = useNavigation<navigationScreenProp>();

  return (
    <AtomWrapper customCSS={CustomStyles}>
      <View
        style={{
          borderBottomEndRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderBottomStartRadius: 20,
        }}
      ></View>
      <Save>
        <AtomWrapper>
          <AtomWrapper
            backgroundColor="#167bd8"
            height="300px"
            alignItems="center"
            justifyContent="flex-end"
            style={{
              borderBottomEndRadius: 25,
              borderBottomStartRadius: 25,
            }}
          >
            <Image
              style={{
                width: 200,
                height: 200,
                borderRadius: 100,
              }}
              source={{
                uri: "https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg",
              }}
            />
            <Text style={Styles.data}>{}</Text>
            <Text style={Styles.data}>{}</Text>
          </AtomWrapper>
          <AtomWrapper
            customCSS={css`
              flex-direction: row;
            `}
            style={Styles.container}
          >
            <AtomWrapper width="50%">
              <Text style={Styles.label}>Dueño</Text>
              <Text style={Styles.data}>{data.owner}</Text>
              <Text style={Styles.label}>Tamaño</Text>
              <Text style={Styles.data}>{data.size}</Text>
              <Text style={Styles.label}>Color</Text>
              <Text style={Styles.data}>{data.color}</Text>
              <Text style={Styles.label}>Esterilizado</Text>
              <Text style={Styles.data}>
                {data.sterilized ? `Si, ${data.sterilizedLocation}` : `No`}
              </Text>
              <Text style={Styles.label}>Animal Silvestre</Text>
              <Text style={Styles.data}>{data.silvestre ? `Si` : `No`}</Text>
            </AtomWrapper>
            <AtomWrapper width="50%">
              <Text style={Styles.label}>C.C. Dueño</Text>
              <Text style={Styles.data}>{data.ccOwner}</Text>
              <Text style={Styles.label}>ID de mascota</Text>
              <Text style={Styles.data}>{data.id}</Text>
              <Text style={Styles.label}>Edad</Text>
              <Text style={Styles.data}>{data.age}</Text>
              <Text style={Styles.label}>Enfermedades</Text>
              <Text style={Styles.data}>
                {data.diseases.map(
                  (disease, i) =>
                    `${disease}${i < data.diseases.length - 1 ? ", " : ""}`
                )}
              </Text>
              <Text style={Styles.label}>Fecha Registro</Text>
              <Text style={Styles.data}>{data.createdAt}</Text>
            </AtomWrapper>
          </AtomWrapper>
          <Text>Pendejo Mentiroso</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("screen2")}
            style={{
              backgroundColor: "purple",
              width: 30,
              height: 30,
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                color: "white",
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </AtomWrapper>
      </Save>
    </AtomWrapper>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    marginTop: 50,
    paddingRight: 10,
  },
  label: {
    fontSize: 20,
    color: "#167BD8",
    fontWeight: "bold",
    marginTop: 15,
  },
  data: {
    fontSize: 16,
    color: "#ffffff",
  },
  map: {
    width: 150,
    height: 100,
  },
});

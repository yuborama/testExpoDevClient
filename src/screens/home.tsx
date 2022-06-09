import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { css } from "styled-components/native";
import { ExploreStackParams, navigationScreenProp } from "../../stack";
import AtomWrapper from "../components/atoms/AtomWrapper";
import MoleculeCardTask from "../components/molecules/MoleculeCardTask";
import MoleculeCardUserHome from "../components/molecules/moleculeCardUserHome";

const tasks = [
  {
    id: 1,
    text: "Mascotas",
    image: require("../../assets/home/pet.png"),
    navigate: "listOwner",
  },
  {
    id: 2,
    text: "Dueños",
    image: require("../../assets/home/check.png"),
    navigate: "listOwner",
  },
  {
    id: 3,
    text: "Encuestadores",
    image: require("../../assets/home/detail.png"),
    navigate: "listPollster",
  },
  {
    id: 4,
    text: "Administradores",
    image: require("../../assets/home/list.png"),
    navigate: "listAdmin",
  },
];

const container = css`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  flex-wrap: wrap;
  padding: 30px;
`;

export default function App() {
  const navigation = useNavigation<navigationScreenProp>();
  return (
    <AtomWrapper
      customCSS={css`
        padding: 30px;
        padding-top: 90px;
      `}
    >
      <MoleculeCardUserHome
        gender="female"
        name="maria de los angeles"
        rol="Administrador"
      />
      <AtomWrapper
        customCSS={css`
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        `}
      >
        {tasks.map((item) => (
          <MoleculeCardTask
            key={item.id}
            {...item}
            onPress={() =>
              navigation.navigate(item.navigate as keyof ExploreStackParams)
            }
          />
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
}

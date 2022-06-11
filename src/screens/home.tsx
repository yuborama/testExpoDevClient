import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native";
import { css } from "styled-components/native";
import { ExploreStackParams, navigationScreenProp } from "../../stack";
import AtomWrapper from "../components/atoms/AtomWrapper";
import MoleculeCardTask from "../components/molecules/MoleculeCardTask";
import MoleculeCardUserHome from "../components/molecules/moleculeCardUserHome";
import USERSTATE from "../zustand/global/store";

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
  const { count, user, dispatchUser, increment } = USERSTATE();
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
      <Text>{user.name} </Text>
      <Text>{user.email} </Text>
      <Text>{user.tel}</Text>
      <Text>{user._id}</Text>
      <Text>{user.password}</Text>
      <Text>COUNTER: {count}</Text>
      <Button title="Logín redirect" onPress={() => {
        navigation.navigate("login");
      }} />
      {/* <Button
        title="Logín "
        onPress={() => {
          dispatchUser({
            type: "SETUSER",
            payload: {
              ...user,
              name: "WHIL",
              email: "GARCÍA11",
              _id: "1",
              password: "123",
              tel: "123456789",
              role: "admin",
            },
          });
        }}
      /> */}
      <Button
        title="REMOVE LOGIN  "
        onPress={() => {
          dispatchUser({
            type: "REMOVELOGIN",
          });
        }}
      />
      <Button title="INCREMENT COUNT" onPress={increment} />
      <Text>W</Text>
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

import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import React, { FC } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { css } from "styled-components/native";
import * as Yup from "yup";
import { navigationScreenProp } from "../../stack";
import AtomButton from "../components/atoms/AtomButton";
import AtomInput from "../components/atoms/AtomInput";
import AtomLoadingScreen from "../components/atoms/AtomLoadingScreen";
import AtomWrapper from "../components/atoms/AtomWrapper";
import { useLazyQueryRealm } from "../hooks/useLazyQueryRealm";
import { useQueryRealm } from "../hooks/useQueryRealm";
import getRealm from "../Realm/config";
import { GET_ALL_USERS } from "../Realm/querys/user";
import USERSTATE from "../zustand/global/store";

const AlertError = (message: string) => {
  Alert.alert(
    "Error",
    message,
    [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    { cancelable: false }
  );
  return null;
};

const LoginScreen: FC = () => {
  const navigation = useNavigation<navigationScreenProp>();
  const { dispatchUser } = USERSTATE();
  // const { data, loading } = useQueryRealm(GET_ALL_USERS, {
  //   onComplete: (data) => {},
  //   filter: [
  //     {
  //       key: "email",
  //       operator: "=",
  //       value: "davidjohan2+admin@hotmail.com",
  //     },
  //   ],
  //   onError: (error) => {},
  // });

  const [login, { loading: loadLazy }] = useLazyQueryRealm(GET_ALL_USERS);
  const { data } = useQueryRealm(GET_ALL_USERS, {
    onComplete: (data) => {
      console.log("data", data);
    },
  });
  const formik = useFormik({
    initialValues: {
      email: `davidjohan2+admin@hotmail.com`,
      password: `johan123`,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Por favor, ingrese un email válido")
        .required(`Escribe tu email`),
      password: Yup.string().required(`Escribe tu contraseña`),
    }),
    onSubmit: async ({ email, password }) => {
      await login({
        filter: [
          {
            key: "email",
            operator: "=",
            value: email,
          },
        ],
        onComplete: (data) => {
          const userData = data.find((item) => item.email === email);
          if (!userData) return AlertError("Usuario no encontrado");
          if (userData.password !== password)
            return AlertError("Contraseña incorrecta");
          dispatchUser({
            type: "SETUSER",
            payload: userData,
          });
          userData.role === "user"
            ? navigation.navigate("userpage", { user: userData })
            : navigation.navigate("home");
        },
      });
    },
  });
  return (
    <AtomLoadingScreen loading={loadLazy}>
      <AtomWrapper
        justifyContent="center"
        alignItems="center"
        customCSS={css`
          flex: 1;
        `}
      >
        <Image
          style={styles.image}
          source={require("../../assets/escudo.png")}
        />
        <AtomInput
          id="email"
          label="Email"
          formik={formik}
          wrapperWidth="80%"
        />
        <AtomInput
          id="password"
          label="Contraseña"
          formik={formik}
          wrapperWidth="80%"
          type="password"
        />

        <AtomButton
          customCSS={css`
            width: 80%;
            background-color: #3a85f8;
            height: 40px;
            border-radius: 15px;
            justify-content: center;
            align-items: center;
          `}
          onPress={() => {
            console.log("submit");
            formik.handleSubmit();
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Ingresar
          </Text>
        </AtomButton>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </AtomWrapper>
    </AtomLoadingScreen>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: "contain",
  },
});

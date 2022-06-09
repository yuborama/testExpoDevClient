import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { css } from "styled-components/native";
import * as Yup from "yup";
import { navigationScreenProp } from "../../stack";
import { useMainContext } from "../business/context/RealmContext";
import { IUser } from "../business/models/interfaces/IUser";
import AtomButton from "../components/atoms/AtomButton";
import AtomInput from "../components/atoms/AtomInput";
import AtomWrapper from "../components/atoms/AtomWrapper";
import USERSTATE from "../zustand/global/store";
const LoginScreen: FC = () => {
  const realm = useMainContext();
  const navigation = useNavigation<navigationScreenProp>();
  const { dispatchUser } = USERSTATE();
  const formik = useFormik({
    initialValues: {
      name: ``,
      cc: ``,
      email: ``,
      tel: ``,
      password: ``,
      passwordConfirm: ``,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Por favor, ingrese un email válido")
        .required(`Escribe tu email`),
      password: Yup.string().required(`Escribe tu contraseña`),
    }),
    onSubmit: ({ email, password }) => {
      if (realm) {
        const users = realm
          .objects<IUser>("User")
          .filtered(`email = "${email}"`);
        const userData = users.find((data) => data.email === email);
        console.log(`mi data`, userData);
        if (userData?.password === password) {
          dispatchUser({
            type: "SETUSER",
            payload: userData,
            //   name: userData.name,
            //   cc: userData.cc,
            //   email: userData.email,
          });
          navigation.navigate("home");
        }
      } else {
        console.log("no hay conexion a internet");
      }
    },
  });
  return (
    <AtomWrapper
      justifyContent="center"
      alignItems="center"
      customCSS={css`
        flex: 1;
      `}
    >
      <Image style={styles.image} source={require("../../assets/escudo.png")} />
      <AtomInput id="email" label="Email" formik={formik} />
      <AtomInput
        id="password"
        label="Contraseña"
        formik={formik}
        secureTextEntry
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

import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useFormik } from "formik";
import { useAtomValue } from "jotai";
import React, { FC } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { css } from "styled-components/native";
import * as Yup from "yup";
import { navigationScreenProp } from "../../stack";
import { RealmAtom } from "../business/context/RealmContext";
import { IUser } from "../business/models/interfaces/IUser";
import {
  GET_ALL_USERS,
  useLazyQueryRealm,
  useQueryRealm,
} from "../business/services/NewUser";
import AtomButton from "../components/atoms/AtomButton";
import AtomInput from "../components/atoms/AtomInput";
import AtomWrapper from "../components/atoms/AtomWrapper";
import USERSTATE from "../zustand/global/store";
const LoginScreen: FC = () => {
  const realm = useAtomValue(RealmAtom);
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
  // console.log(`data`, data);
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
    onSubmit: ({ email, password }) => {
      // if (realm) {
      //   const users = realm
      //     .objects<IUser>("User")
      //     .filtered(`email = "${email}"`);
      //   const userData = users.find((data) => data.email === email);
      //   // console.log(`mi data`, userData);
      //   if (userData) {
      //     if (userData?.password === password) {
      //       dispatchUser({
      //         type: "SETUSER",
      //         payload: userData,
      //       });
      //       userData.role === "user"
      //         ? navigation.navigate("userpage", { user: userData })
      //         : navigation.navigate("home");
      //     } else {
      //       Alert.alert("Contraseña incorrecta");
      //     }
      //   } else {
      //     Alert.alert("Usuario no encontrado");
      //   }
      // } else {
      //   Alert.alert("no hay conexion a internet");
      // }
      login({
        filter: [
          {
            key: "email",
            operator: "=",
            value: email,
          },
        ],
        onComplete: (data) => {
          console.log(`data oncomplete in login`, data);
        },
      });
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
      <AtomInput id="email" label="Email" formik={formik} wrapperWidth="80%" />
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

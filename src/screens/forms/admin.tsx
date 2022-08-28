import { useFormik } from "formik";
import React, { FC } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import styled, { css } from "styled-components/native";
import AtomInput from "../../components/atoms/AtomInput";
import AtomWrapper from "../../components/atoms/AtomWrapper";
import * as Yup from "yup";
import { AtomWrapperTypes } from "../../components/atoms/AtomWrapper/types";
import { v4 as uuid } from "uuid";
import { CREATE_USER } from "../../Realm/mutations/user";
import { useMutationRealm } from "../../hooks/useMutationRealm";

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

const ScreenFormAdmin: FC = () => {
  const [createUser, { data, loading }] = useMutationRealm(CREATE_USER, {
    onComplete: (data) => {
      console.log(`data oncomplete`, data);
    },
  });
  // const [createUser, { data, loading }] = useCreateUser();
  console.log(`data`, data);
  console.log(`loading`, loading);
  const formik = useFormik({
    initialValues: {
      name: ``,
      cc: ``,
      email: ``,
      tel: ``,
      password: ``,
      passwordConfirm: ``,
      sex: ``,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string().required(`Escribe tu nombre`),
      cc: Yup.string().required(`Escribe tu CC`),
      email: Yup.string()
        .email("Por favor, ingrese un email válido")
        .required(`Escribe tu email`),
      tel: Yup.string().required(`Escribe tu telefono`),
      password: Yup.string().required(`Escribe tu contraseña`),
      passwordConfirm: Yup.string()
        .required(`Escribe tu contraseña`)
        .equals([Yup.ref("password"), null], "Las contraseñas no coinciden"),
      sex: Yup.string().required("Seleccione un sexo"),
    }),
    onSubmit: (values) => {
      createUser({
        ...values,
        _id: uuid(),
        _partition: "testTask",
        role: "pollster",
      }).then((data) => {
        console.log(`data then`, data);
      });
    },
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        style={{
          width: "100%",
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              padding: 20,
              alignItems: "center",
              paddingBottom: 60,
            }}
          >
            <AtomInput
              id="cc"
              label="Numero del documento"
              keyboardType="numeric"
              formik={formik}
            />
            <AtomInput id="name" label="Nombre" formik={formik} />
            <AtomInput id="email" label="Email" formik={formik} />
            {/* <Pi */}
            <AtomInput
              id="tel"
              label="Numero de telefono"
              keyboardType="numeric"
              formik={formik}
            />
            <AtomInput
              id="password"
              label="Contraseña"
              type="password"
              formik={formik}
            />
            <AtomInput
              id="passwordConfirm"
              type="password"
              label="Confirmar contraseña"
              formik={formik}
            />
            <AtomInput
              id="sex"
              label="Sexo"
              type="select"
              formik={formik}
              options={[
                {
                  id: "1",
                  label: "Mujer",
                  value: "female",
                },
                {
                  id: "2",
                  label: "Hombre",
                  value: "male",
                },
              ]}
            />
            <ButtonAtom
              customCSS={css`
                width: 80%;
                background-color: #3a85f8;
                height: 40px;
                border-radius: 15px;
                justify-content: center;
                align-items: center;
              `}
              onPress={() => {
                console.log(formik.values);
                formik.handleSubmit();
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "700",
                }}
              >
                Enviar
              </Text>
            </ButtonAtom>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ScreenFormAdmin;

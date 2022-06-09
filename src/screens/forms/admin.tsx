import { useFormik } from "formik";
import React, { FC } from "react";
import { ScrollView, Text } from "react-native";
import styled, { css } from "styled-components/native";
import AtomInput from "../../components/atoms/AtomInput";
import AtomWrapper from "../../components/atoms/AtomWrapper";
import * as Yup from "yup";
import { AtomWrapperTypes } from "../../components/atoms/AtomWrapper/types";

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
    }),
    onSubmit: (values) => {
      console.log(`values`, values);
      //   formik.resetForm();
    },
  });
  return (
    <AtomWrapper
      customCSS={css`
        flex: 1;
        padding-top: 90px;
        padding-bottom: 10px;
        align-items: center;
      `}
    >
      <Text>ScreenFormUser</Text>
      <ScrollView
        style={{
          width: "100%",
          paddingLeft: 30,
        }}
      >
        <AtomInput id="name" label="Nombre" formik={formik} />
        <AtomInput
          id="cc"
          label="Numero del documento"
          keyboardType="numeric"
          formik={formik}
        />
        <AtomInput id="email" label="Email" formik={formik} />
        <AtomInput
          id="tel"
          label="Numero de telefono"
          keyboardType="numeric"
          formik={formik}
        />
        <AtomInput id="password" label="Contraseña" formik={formik} />
        <AtomInput
          id="passwordConfirm"
          label="Confirmar contraseña"
          formik={formik}
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
      </ScrollView>
    </AtomWrapper>
  );
};
export default ScreenFormAdmin;

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

const ScreenFormUser: FC = () => {
  const formik = useFormik({
    initialValues: {
      name: ``,
      ccowner: ``,
      namePet: ``,
      typePet: ``,
      race: ``,
      size: ``,
      date: ``,
      gender: ``,
      color: ``,
      observations: ``,
      diseases: ``,
      direction: ``,
      location: ``,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string().required(`Escribe tu nombre`),
      ccowner: Yup.string().required(`Escribe tu CC`),
      namePet: Yup.string().required(`Escribe tu nombre de mascota`),
      typePet: Yup.string().required(`Escribe el tipo de animal`),
      race: Yup.string().required(`Escribe la raza`),
      size: Yup.string().required(`Escribe el tamaño de nacimiento`),
      date: Yup.string().required(`Escribe la fecha`),
      gender: Yup.string().required(`Escribe el genero`),
      color: Yup.string().required(`Escribe el color de tu mascota`),
      //   observations: Yup.string().required(`Escribe tu CC`),
      //   diseases: Yup.string().required(`Escribe tu CC`),
      direction: Yup.string().required(`Escribe tu direccion`),
      location: Yup.string().required(`Escribe tu Zona`),
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
        <AtomInput id="name" label="Nombre del dueño" formik={formik} />
        <AtomInput id="ccowner" label="Cedula del dueño" formik={formik} />
        <AtomInput id="namePet" label="nombre de la mascota" formik={formik} />
        <AtomInput id="typePet" label="Tipo de animal" formik={formik} />
        <AtomInput id="race" label="Raza" formik={formik} />
        <AtomInput id="size" label="Tamaño" formik={formik} />
        <AtomInput id="date" label="Fecha de nacimiento" formik={formik} />
        <AtomInput id="gender" label="Sexo" formik={formik} />
        <AtomInput id="color" label="Color" formik={formik} />
        <AtomInput id="observations" label="Observaciones" formik={formik} />
        <AtomInput id="diseases" label="Enfermedades" formik={formik} />
        <AtomInput id="direction" label="Direccion" formik={formik} />
        <AtomInput id="location" label="Zona" formik={formik} />
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
export default ScreenFormUser;

// const styles = StyleSheet.create({

// });

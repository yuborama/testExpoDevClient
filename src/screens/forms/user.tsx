import { useFormik } from "formik";
import React, { FC } from "react";
import { ScrollView, Text } from "react-native";
import styled, { css } from "styled-components/native";
import AtomInput from "../../components/atoms/AtomInput";
import AtomWrapper from "../../components/atoms/AtomWrapper";
import * as Yup from "yup";
import { AtomWrapperTypes } from "../../components/atoms/AtomWrapper/types";
import { AtomText } from "../../components/atoms/AtomText";
import Colors from "../../constants/Colors";

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
type typeofIput =
  | "text"
  | "password"
  | "email"
  | "number"
  | "phone"
  | "checkbox"
  | "select";
const basicInput = [
  {
    id: "name",
    label: "Nombre",
    placeholder: "Nombre",
  },
  {
    id: "ccowner",
    label: "Numero de documento",
    placeholder: "Numero de documento",
  },
  {
    id: "email",
    label: "Correo electronico",
    placeholder: "Correo electronico",
  },
  {
    id: "phone",
    label: "Numero Telefono",
    placeholder: "Ingrese su numero telefonico",
  },
  {
    id: "gender",
    label: "Sexo",
    placeholder: "Seleccione un genero",
    type: "select" as typeofIput,
    options: [
      {
        id: 1,
        label: "Masculino",
        value: "masculine",
      },
      {
        id: 2,
        label: "Femenino",
        value: "female",
      },
    ],
  },
  {
    id: "observations",
    label: "Observaciones",
    placeholder: "Digite sus observaciones en casos de haberlas",
  },
];

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
        align-items: center;
        justify-content: center;
        background-color: white;
      `}
    >
      <ScrollView
        style={{
          width: "100%",
          paddingLeft: 30,
        }}
      >
        {basicInput.map((item) => (
          <AtomInput
            wrapperWidth="85%"
            key={item.id}
            formik={formik}
            {...item}
          />
        ))}
        <AtomText color={Colors.light.primary} fontSize="20" fontWeight="bold">
          Ubicacion
        </AtomText>
        <AtomInput
          id="size"
          label="Direccíon"
          formik={formik}
          wrapperWidth="85%"
        />
        <AtomInput id="date" label="Zona" formik={formik} wrapperWidth="85%" />
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

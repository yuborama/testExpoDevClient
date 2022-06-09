import { FormikValues } from "formik";
import React, { FC } from "react";
import {
  TextInput,
  TextInputProps,
  View,
  Text,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";
import lodash from "lodash";
import AtomTextError from "./textError";
import AtomWrapper from "../AtomWrapper";
import { css } from "styled-components/native";

interface AtomInputType extends TextInputProps {
  formik?: FormikValues;
  value?: string;
  id: string;
  label?: string;
  keyboardType?: KeyboardTypeOptions;
}

const AtomInput: FC<AtomInputType> = (props) => {
  const { formik, value, id, label, keyboardType } = props;
  return (
    <AtomWrapper
      customCSS={css`
        width: 80%;
      `}
      style={{
        marginBottom: 5,
      }}
    >
      {label && <Text style={{ fontWeight: "bold" }}>{label}</Text>}
      <TextInput
        style={styles.input}
        value={lodash.get(formik?.values, id) ?? value}
        onChangeText={formik?.handleChange(id)}
        keyboardType={keyboardType}
      />
      <AtomTextError {...props} />
    </AtomWrapper>
  );
};
export default AtomInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#1b1b33",
    height: 40,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    width: "100%",
    // marginBottom: 20,
  },
});

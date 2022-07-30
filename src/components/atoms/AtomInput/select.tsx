import React, { FC, useState } from "react";
import { FlatList, Text, useColorScheme } from "react-native";
import { css } from "styled-components/native";
import Colors from "../../../constants/Colors";
import { AtomButton } from "../AtomButton";
import AtomIcon from "../AtomIcon";
import AtomModal from "../AtomModal";
import AtomWrapper from "../AtomWrapper";
import InputText from "./InputText";
import AtomInputType from "./type";

const InputSelect: FC<AtomInputType> = (props) => {
  const { options, formik, id } = props;
  const [isOpen, SetisOpen] = useState(false);
  const colorScheme = useColorScheme();
  return (
    <>
      <AtomModal
        isOpen={isOpen}
        colorModal="#000000d7"
        component={
          <AtomWrapper
            width="60%"
            alignItems="center"
            style={[
              {
                maxHeight: "50%",
                borderWidth: 1,
                borderColor: `${Colors.dark.text}`,
                borderStyle: "solid",
                paddingBottom: 20,
              },
            ]}
          >
            <AtomButton
              onPress={() => SetisOpen(!isOpen)}
              width="auto"
              backgroundColor="transparent"
              style={{
                alignSelf: "flex-end",
              }}
            >
              <AtomIcon
                uri="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/califarma/icons/close.svg"
                color={`${
                  colorScheme !== "dark"
                    ? Colors.dark?.text
                    : Colors.light?.text
                }`}
              />
            </AtomButton>
            <FlatList
              style={{
                width: "100%",
                // marginBottom: 20,
              }}
              data={options}
              renderItem={({ item }) => (
                <AtomButton
                  key={item.id}
                  customCSS={css`
                    border-radius: 5px;
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 3px;
                    background-color: transparent;
                  `}
                  onPress={() => {
                    formik?.setFieldValue(id, item.value);
                    SetisOpen(!isOpen);
                  }}
                >
                  <Text
                    style={{
                      color: `${Colors.dark.text}`,
                      fontSize: 16,
                      fontWeight: "bold",
                      padding: 10,
                      textAlign: "center",
                    }}
                  >
                    {item.label}
                  </Text>
                </AtomButton>
              )}
            />
          </AtomWrapper>
        }
      />
      <InputText
        iconUri="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/califarma/icons/selectInput.svg"
        onPressIcon={() => SetisOpen(!isOpen)}
        onPressIn={() => SetisOpen(!isOpen)}
        inputIconcolor={
          colorScheme !== "dark"
            ? Colors.light?.inputColor
            : Colors.dark?.inputColor
        }
        value={
          options?.find((item) => item.value === formik?.values[id])?.label ??
          ""
        }
        {...props}
      />
    </>
  );
};
export default InputSelect;

import React, { FC, ReactNode } from "react";
import { Modal, ModalProps, Text, useColorScheme } from "react-native";
import { AtomButton } from "../AtomButton";
import AtomWrapper from "../AtomWrapper";

interface AtomModalType {
  isOpen: boolean;
  modalProps?: ModalProps;
  component?: ReactNode;
  colorModal?: string;
}

const AtomModal: FC<AtomModalType> = (props) => {
  const { isOpen, modalProps, component, colorModal } = props;
  const colorScheme = useColorScheme();
  return (
    <Modal
      visible={isOpen}
      transparent={true}
      animationType="slide"
      {...modalProps}
    >
      <AtomWrapper
        style={{
          flex: 1,
        }}
        justifyContent="center"
        alignItems="center"
        backgroundColor={
          colorModal
            ? colorModal
            : `${colorScheme !== "dark" ? "#ffffffd6" : "#000000d7"}`
        }
      >
        {/* <AtomWrapper
          alignItems="center"
          justifyContent="center"
          backgroundColor={`${colorScheme !== 'dark' ? '#F9F9F9' : '#413c3cd5'}`}
        > */}
        {component}
        {/* </AtomWrapper> */}
      </AtomWrapper>
    </Modal>
  );
};
export default AtomModal;

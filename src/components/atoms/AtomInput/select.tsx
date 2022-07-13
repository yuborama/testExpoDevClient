import React, { FC, useState } from 'react';
import { FlatList, Modal, Text, useColorScheme } from 'react-native';
import { css } from 'styled-components/native';
import Colors from '../../../constants/Colors';
import { AtomButton } from '../AtomButton';
import AtomIcon from '../AtomIcon';
import AtomModal from '../AtomModal';
import AtomWrapper from '../AtomWrapper';
import Input from './inputText';
import AtomInputType from './type';

const InputSelect: FC<AtomInputType> = (props) => {
  const { options } = props;
  const [isOpen, SetisOpen] = useState(false);
  const colorScheme = useColorScheme();
  return (
    <>
      <AtomModal
        isOpen={isOpen}
        component={
          <AtomWrapper
            width="50%"
            alignItems="center"
            style={[
              {
                maxHeight: '50%',
              },
            ]}
          >
            <AtomButton
              onPress={() => SetisOpen(!isOpen)}
              width="auto"
              backgroundColor="transparent"
              style={{
                alignSelf: 'flex-end',
              }}
            >
              <AtomIcon
                uri="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/califarma/icons/close.svg"
                color={`${colorScheme !== 'dark' ? Colors.light.text : Colors.dark.text}`}
              />
            </AtomButton>
            <FlatList
              data={options}
              renderItem={({ item }) => (
                <AtomButton
                  key={item.id}
                  customCSS={css`
                    height: 40px;
                    border-radius: 5px;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 3px;
                    background-color: transparent;
                  `}
                  onPress={() => {}}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      fontWeight: 'bold',
                      margin: 10,
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
      <Input
        iconUri="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/Cheisi/View.svg"
        onPressIcon={() => SetisOpen(!isOpen)}
        placeholder="Contraseña"
        keyboardType="numbers-and-punctuation"
        onPressIn={() => SetisOpen(!isOpen)}
        {...props}
      />
    </>
  );
};
export default InputSelect;

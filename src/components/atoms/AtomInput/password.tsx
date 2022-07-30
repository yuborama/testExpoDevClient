import React, { FC, useState } from 'react';
import InputText from './InputText';
import AtomInputType from './type';

const InputPassword: FC<AtomInputType> = (props) => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <InputText
        iconUri={
          visible
            ? 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/Cheisi/View.svg'
            : 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/Cheisi/Viewoff.svg'
        }
        secureTextEntry={visible}
        onPressIcon={() => setVisible(!visible)}
        textContentType="password"
        keyboardType="numbers-and-punctuation"
        {...props}
      />
    </>
  );
};
export default InputPassword;
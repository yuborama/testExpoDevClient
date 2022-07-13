import { FC } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native';
import Colors from '../../../constants/Colors';
import AtomIcon from '../AtomIcon';
import AtomWrapper from '../AtomWrapper';
import AtomTextError from './textError';
import lodash from 'lodash';
import AtomInputType from './type';

const Input: FC<AtomInputType> = (props) => {
  const {
    formik,
    value,
    id,
    label,
    secureTextEntry,
    wrapperWidth,
    placeholder,
    onPressIcon,
    iconUri,
    inputIconWidth,
    inputIconHeigth,
    inputIconcolor,
    labelFontSize: fontSize,
  } = props;
  const colorScheme = useColorScheme();

  return (
    <AtomWrapper
      width={wrapperWidth ?? '100%'}
      style={{
        marginBottom: 5,
      }}
    >
      <>
        {label && (
          <Text style={{ fontSize: fontSize as number, fontWeight: 'bold', color: '#4a4a49' }}>
            {label}
          </Text>
        )}
        <View
          style={[
            styles?.inputContainer,
            {
              backgroundColor: `${
                colorScheme === 'dark'
                  ? Colors?.dark?.inputBacckground
                  : Colors?.light?.inputBacckground
              }`,
            },
          ]}
        >
          <TextInput
            style={[
              styles.input,
              { width: iconUri ? '85%' : '100%' },
              {
                color: colorScheme !== 'dark' ? Colors.light?.primary : Colors.dark?.text,
                backgroundColor: '#ffffff',
              },
            ]}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            value={lodash.get(formik?.values, id) ?? value}
            onChangeText={formik?.handleChange(id)}
            {...props}
          />
          {iconUri && (
            <TouchableOpacity onPress={onPressIcon} style={styles.iconContainer}>
              <AtomIcon
                color={
                  inputIconcolor ||
                  `${colorScheme === 'dark' ? Colors?.light?.primary : Colors?.dark?.primary}`
                }
                uri={iconUri}
                width={inputIconWidth || '22px'}
                height={inputIconHeigth || '22px'}
              />
            </TouchableOpacity>
          )}
        </View>
        <AtomTextError {...props} />
      </>
    </AtomWrapper>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 5,
    borderWidth: 0.5,
    borderColor: '#ececec',
    height: 40,
    borderRadius: 5,
    paddingLeft: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  input: {
    fontSize: 16,
  },
});

export default Input;

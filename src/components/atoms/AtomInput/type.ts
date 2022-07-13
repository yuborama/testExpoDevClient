import { FormikValues } from 'formik';
import { TextInputProps, TextStyle } from 'react-native';
import { AtomWrapperTypes } from '../AtomWrapper/types';

interface AtomInputType extends TextInputProps {
  formik?: FormikValues;
  value?: string;
  id: string;
  label?: string;
  wrapperWidth?: string;
  labelFontSize?: number;
  onPressIcon?: () => void;
  iconUri?: string;
  inputIconWidth?: string;
  inputIconHeigth?: string;
  inputIconcolor?: string;
  inputStyle?: TextStyle;
  type?: 'text' | 'password' | 'email' | 'number' | 'phone' | 'checkbox' | 'select';
  colorChecked?: string;
  colorBoxChecked?: string;
  isChecked?: boolean;
  setChecked?: (value: boolean) => void;
  disabled?: boolean;
  customCSS?: AtomWrapperTypes;
  options?: { value: string | number; label: string; id: string | number }[];
}

export default AtomInputType;

import { FormikValues } from 'formik';
import { FC, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { FlattenSimpleInterpolation } from 'styled-components';
import { css } from 'styled-components/native';
import { AtomText } from '../AtomText';
import AtomWrapper from '../AtomWrapper';

type Props = {
  label: string;
  formik?: FormikValues;
  colorRadio?: string;
  labelColor?: string;
  labelFontSize?: string;
  labelFontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  labelCSS?: FlattenSimpleInterpolation;
  isChecked?: boolean;
  disabled?: boolean;
  wrapperCSS?: FlattenSimpleInterpolation;
  id: string;
  onPress?: (value: boolean) => void;
};

const AtomInputRadio: FC<Props> = (props) => {
  const handleChange = useCallback(() => {
    if (Object?.keys(props?.formik?.values ?? {})?.find((key) => key === props?.id)) {
      props?.formik?.setFieldValue(props?.id, !props?.formik?.values?.[props?.id]);
    } else if (props?.onPress) {
      props?.onPress && props?.onPress(props?.isChecked as boolean);
    }
  }, [props?.onPress, props?.isChecked, props?.formik?.values]);

  return (
    <AtomWrapper flexDirection="row" width="auto" customCSS={props?.wrapperCSS}>
      <TouchableOpacity
        style={{
          height: 20,
          width: 20,
          borderRadius: 100,
          borderWidth: 2,
          borderColor: props?.colorRadio ?? '#f1576c',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={!props?.disabled ? handleChange : () => {}}
      >
        {props?.isChecked && (
          <AtomWrapper
            customCSS={css`
              width: 10px;
              height: 10px;
              border-radius: 50px;
              background-color: ${props?.isChecked ? props?.colorRadio ?? '#00bcd4' : ''};
            `}
          />
        )}
      </TouchableOpacity>
      {props.label ? (
        <AtomText
          fontSize={props.labelFontSize}
          fontWeight={props.labelFontWeight}
          color={props.labelColor}
          onPress={!props?.disabled ? handleChange : () => {}}
          customCSS={css`
            margin-left: 10px;
            ${props?.labelCSS}
          `}
        >
          {props.label}
        </AtomText>
      ) : (
        props.children
      )}
    </AtomWrapper>
  );
};

export default AtomInputRadio;

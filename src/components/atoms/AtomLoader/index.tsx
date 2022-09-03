import { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import Colors from '../../../constants/Colors';
import USERSTATE from '../../../zustand/global/store';
import AtomWrapper from '../AtomWrapper';
import { AtomWrapperProps } from '../AtomWrapper/types';

type Props = {
  type: number | 'small' | 'large' | undefined;
  colorLoading?: string;
} & AtomWrapperProps;

const AtomLoader: FC<Props> = (props) => {
  return (
    <AtomWrapper {...props} width="auto">
      <ActivityIndicator
        size={props.type ?? 'large'}
        color={props.colorLoading || Colors?.light?.primary}
      />
    </AtomWrapper>
  );
};

export default AtomLoader;

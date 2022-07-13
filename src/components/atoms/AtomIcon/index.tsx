import SvgUri from 'expo-svg-uri';
import { FC } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

type AtomIconTypes = {
  uri?: string;
  width?: string;
  height?: string;
  style?: ViewStyle;
  color?: string;
};

const AtomIcon: FC<AtomIconTypes> = (props) => {
  const styled = styles(props);

  return (
    <View style={styled.container}>
      <SvgUri
        width={props.width ?? '45'}
        height={props.height ?? '45'}
        fill={props.color ?? Colors.light?.primary}
        stroke={props.color ?? Colors.light?.primary}
        // fillAll
        source={{
          uri: props.uri,
        }}
      />
    </View>
  );
};

const styles = (props: AtomIconTypes) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      ...(props?.style ?? {}),
    },
  });

export default AtomIcon;

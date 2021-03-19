import React from 'react';
import {Button as NativeButton} from 'react-native';
import * as color from '../../assets/color';

export default function Button(props) {
  const {title, onPress} = props;
  return <NativeButton title={title} color={color.red} onPress={onPress} />;
}

import React from 'react';
import { Text } from 'react-native';
import Styles from './style';

const Typography = ({
  color,
  size = 'xs',
  maxLines = 0,
  children,
  style,
  weight = 'default',
  textAlign = 'left',
  mt,
  ml,
  mr,
  mb,
}) => {

  return (
    <Text
      numberOfLines={ maxLines }
      style={ [
        Styles[`weight_${weight}`],
        Styles.color(color),
        Styles[`font_${size}`],
        Styles.align(textAlign),
        Styles.mt(mt),
        Styles.ml(ml),
        Styles.mr(mr),
        Styles.mb(mb),
        style] }>
      { children }
    </Text>
  );
};

export default Typography;

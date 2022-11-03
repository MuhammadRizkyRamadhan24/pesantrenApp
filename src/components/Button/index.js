import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors } from 'utils/colors';
import Styles from './style';
import { Text } from 'components/index';
import Icon from 'react-native-vector-icons/AntDesign';

const Button = ({
  disabled,
  onPress,
  loading,
  mode,
  style,
  text,
  icon,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={ 0.8 }
      onPress={ onPress }
      disabled={ disabled }
      style={ [
        Styles.button,
        {
          backgroundColor: loading ? Colors.disabled : Colors.white,
        },
        mode && Styles[mode],
        style,
      ] }>
      { icon ?
        <>
          <Text weight='semibold' style={ { fontSize: 14 } } color={ Colors.white }>{ text }</Text>
          <Icon name='arrowright' size={ 20 } color={ Colors.white } style={ { marginLeft:10 } }/>
        </>
        :
        <Text weight='semibold' style={ { fontSize: 14 } } color={ Colors.white }>{ text }</Text>
      }
    </TouchableOpacity>
  );
};

export default Button;

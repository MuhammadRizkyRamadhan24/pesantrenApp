import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from 'src/utils/colors';
import { Text } from 'components/index';
import Styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationHelper } from 'helpers/';
import screenName from 'config/screenName';

const CustomTextInput = ({
  placeholder,
  autoFocus,
  isNumber,
  isPassword,
  editable = true,
  onChangeText,
  type,
  style,
  icon,
  value,
  label,
  onPress,
  styleContainer,
  onSubmitEditing,
  isScan,
  isTopup,
  itemName,
  keyboardType,
  isPhonenumber,
  ...props
}) => {
  const [state, setState] = useState({
    hide: true,
  });

  return (
    <View style={ [Styles.container, styleContainer] }>
      <Text style={ Styles.textLabel }>{ label }</Text>
      { isTopup ?
        <View>
          <Text size='s' weight='semibold'>Nominal</Text>
          <View style={ Styles.wrapInputTopup }>
            <Text size='xl' >Rp</Text>
            <TextInput
              value={ value }
              editable={ editable }
              placeholder={ placeholder }
              autoFocus={ autoFocus }
              onChangeText={ onChangeText }
              onSubmitEditing={ onSubmitEditing }
              keyboardType={ keyboardType }
              style={ [
                Styles.topup,
                Styles[type || 'default'],
                style,
              ] }
              { ...props }
            />
          </View>
        </View>
        :
        <View style={ Styles.wrapInput }>
          <Text style={ { paddingLeft: 5 } }>{ placeholder }</Text>
          <View style={ { flexDirection: 'row' } }>
            
            <TextInput
              value={ value }
              editable={ editable }
              placeholder={ placeholder }
              autoFocus={ autoFocus }
              onChangeText={ onChangeText }
              onSubmitEditing={ onSubmitEditing }
              style={ [
                editable ? Styles.input(icon) : Styles.inputDisable(icon),
                Styles[type || 'default'],
                style,
              ] }
              keyboardType={ keyboardType }
              secureTextEntry={ isPassword ? state.hide : false }
              { ...props }
            />
            { isPassword && (
              <TouchableOpacity
                activeOpacity={ 0.8 }
                onPress={ () => setState({ ...state, hide: !state.hide }) }
                style={ Styles.hideButton }>
                <Feather
                  color={ Colors.grey }
                  name={ state.hide ? 'eye-off' : 'eye' }
                  size={ 20 }
                />
              </TouchableOpacity>
            ) }
            { isScan && (
              <TouchableOpacity style={ Styles.hideButton } onPress={ () => NavigationHelper.navigate(screenName.SCAN_BARCODE, { itemName: itemName }) }>
                <Icon name='camera' size={ 20 } color={ Colors.primary }/>
              </TouchableOpacity>
            ) }
          </View>
        </View> }
    </View>
  );
};

export default CustomTextInput;

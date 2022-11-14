import React from 'react';
import {
  Modal,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Colors } from 'src/utils/colors';
import { Text } from 'components/index';
import { Images } from 'consts/index';
import Styles from './style';

const CustomModal = ({
  modalVisible,
  request,
  titleOne,
  titleTwo,
  onPress,
  btn,
  type,
  textBtn,
  onCancel,
  textBtnCancel,
  textBtnOk,
  message,
}) => {
  return (
    <Modal
      animationType='fade'
      transparent={ true }
      visible={ modalVisible }
      onRequestClose={ request }>
      <View
        style={
          type !== 'loading' ? Styles.centeredView : Styles.centeredViewLoading
        }>
        <View
          style={
            type !== 'loading' ? Styles.modalView : Styles.modalViewLoading
          }>
          { type === 'default' && (
            <React.Fragment>
              <Image
                source={ Images.success }
                style={ { width: 63, height: 59, marginBottom: 20 } }
              />
              <Text size='xs' color={ Colors.grey } style={ Styles.text }>
                { titleOne }
              </Text>
              <Text size='xs' color={ Colors.grey } style={ Styles.text }>
                { titleTwo }
              </Text>
              { btn && (
                <TouchableOpacity
                  activeOpacity={ 0.8 }
                  style={ [Styles.button, Styles.buttonClose] }
                  onPress={ onPress }>
                  <Text size='xs' color={ Colors.white }>
                    { textBtn }
                  </Text>
                </TouchableOpacity>
              ) }
            </React.Fragment>
          ) }
          { type === 'loading' && (
            <React.Fragment>
              <View style={ { marginBottom: 30 } }>
                <ActivityIndicator size={ 40 } color={ Colors.primary } />
              </View>
              <Text
                weight='semibold'
                color={ Colors.grayModal }
                size='xxs'
                style={ { textAlign: 'center' } }>
                { titleTwo }
              </Text>
            </React.Fragment>
          ) }
          { type === 'choose' && (
            <React.Fragment>
              <Text
                size='xs'
                weight='semibold'
                color={ Colors.blackOnyx }
                style={ Styles.text }>
                { titleOne }
              </Text>
              <View
                style={ { flexDirection: 'row', justifyContent: 'space-between' } }>
                <TouchableOpacity
                  activeOpacity={ 0.8 }
                  style={ {
                    ...Styles.button,
                    ...Styles.buttonCancel,
                    ...Styles.buttonBorder,
                    marginRight: 5,
                  } }
                  onPress={ onCancel }>
                  <Text size='xs' color={ Colors.primary }>
                    { textBtnCancel }
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={ 0.8 }
                  style={ {
                    ...Styles.button,
                    ...Styles.buttonClose,
                    marginLeft: 5,
                  } }
                  onPress={ onPress }>
                  <Text size='xs' color={ Colors.white }>
                    { textBtnOk }
                  </Text>
                </TouchableOpacity>
              </View>
            </React.Fragment>
          ) }
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

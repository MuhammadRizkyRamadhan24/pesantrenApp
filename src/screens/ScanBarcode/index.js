import React from 'react';
import { View, Vibration, LogBox } from 'react-native';
import { Header } from 'components/';
import Styles from './style';
import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
import { NavigationHelper } from 'helpers/';

LogBox.ignoreLogs([
  'exported from \'deprecated-react-native-prop-types\'.',
]);
  
const ScanBarcode = (props, { camera }) => {
  const onBarCodeRead = e => {
    Vibration.vibrate([0, 100]);
    NavigationHelper.goBack();
  };

  return (
    <View style={ Styles.container }>
      <Header.Basic title={ props.route.params.itemName } size='m' />
      <RNCamera
        ref={ ref => {
          camera = ref;
        } }
        defaultTouchToFocus
        captureAudio={ false }
        style={ { flex: 1 } }
        type={ RNCamera.Constants.Type.back }
        androidCameraPermissionOptions={ {
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        } }
        onBarCodeRead={ onBarCodeRead }>
        <BarcodeMask edgeColor={ '#fff' } />
      </RNCamera>
    </View>
  );
};

export default ScanBarcode;

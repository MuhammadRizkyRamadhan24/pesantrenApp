import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'components/index';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Colors } from 'src/utils/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeFieldRoot: { marginTop: 60 },
  containerOtp: {
    backgroundColor: Colors.primary,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 50,
  },
});

const CELL_COUNT = 4;

const Otp = props => {
  const phone = props?.route?.params?.phone;

  console.log(phone);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    if (value.length === 4) {
      const val = {
        phone: phone,
        otp: value,
      };
      console.log(val);
      setValue('');
    }
  }, [value]);
  


  return (
    <View style={ styles.container }>
      <Text size='xl' weight='medium' textAlign='center'>Verifikasi Nomor anda</Text>
      <Text size='s' textAlign='center' color={ Colors.defaultColor }>Masukan kode OTP anda</Text>
      <CodeField
        ref={ ref }
        { ...prop }
        value={ value }
        onChangeText={ setValue }
        cellCount={ CELL_COUNT }
        rootStyle={ styles.codeFieldRoot }
        keyboardType='number-pad'
        // textContentType='oneTimeCode'
        renderCell={ ({ index, symbol, isFocused }) => (
          <View key={ index } style={ styles.containerOtp }>
            <Text
              color={ Colors.white }
              size='xl'
              key={ index }
              onLayout={ getCellOnLayoutHandler(index) }>
              { symbol || (isFocused ? <Cursor /> : null) }
            </Text>
          </View>
        ) }
      />
      <View style={ { marginTop: 50 } }>
        <Text size='s' color={ Colors.defaultColor } weight='medium' textAlign='center'>Tidak menerima kode OTP?</Text>
        <Text size='s' textAlign='center' weight='bold' color={ Colors.primary }>KIRIM ULANG KODE OTP ANDA</Text>
      </View>
      { /* <Button title='Test' onPress={ () => setValue('') } /> */ }
    </View>
  );
};

export default Otp;

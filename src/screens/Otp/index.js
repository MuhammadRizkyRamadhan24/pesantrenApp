import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, CustomModal } from 'components/index';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Colors } from 'src/utils/colors';
import Styles from './style';
import Dispatches from 'consts/Dispatches';
import navigation from 'helpers/navigation';
import screenName from 'config/screenName';

import { activateUserFetch, reqOtpFetch } from 'redux-app/auth/actions';
import { useDispatch, useSelector } from 'react-redux';

const CELL_COUNT = 4;

const Otp = props => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const loading = useSelector(state => state.misc.loading);
  const { messageReqOtp, messageActivateUser } = useSelector(state => state.auth);
  const phone = props?.route?.params?.phone;
  const [timerCount, setTimer] = useState(120);
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
      dispatch(
        activateUserFetch({
          data: val,
        }),
      );
      setValue('');
    }
  }, [value]);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (timerCount === 0) {
          return lastTimerCount;
        } else {
          return lastTimerCount - 1;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerCount]);

  const hours = timerCount < 0 ? 0 : Math.floor(timerCount / 60);
  const second = timerCount < 0 ? 0 : timerCount % 60;
  const finalSecond = second.toString().length === 1 ? `0${second}` : second;

  const resetTimer = () => {
    dispatch(
      reqOtpFetch({
        data: { phone: phone },
      }),
    );
  };

  useEffect(() => {
    if (messageReqOtp === 'success') {
      setTimer(120);
      dispatch({
        type: 'LOGOUT',
      });
    }
  }, [messageReqOtp]);

  useEffect(() => {
    if (messageReqOtp === 'success') {
      setTimer(120);
      dispatch({
        type: Dispatches.REQ_OTP_RESPONSE,
        response: '',
      });
    }
  }, [messageReqOtp]);

  useEffect(() => {
    if (messageActivateUser === 'success') {
      setModalVisible(true);
    }
  }, [messageActivateUser]);

  const success = () => {
    dispatch({
      type: Dispatches.ACTIVATE_USER_RESPONSE,
      response: '',
    });
    setModalVisible(false);
    navigation.replace(screenName.LOGIN);
  };

  return (
    <View style={ Styles.container }>
      <Text size='xl' weight='medium' textAlign='center'>Verifikasi Nomor anda</Text>
      <Text size='s' textAlign='center' color={ Colors.defaultColor }>Masukan kode OTP anda</Text>
      <CodeField
        ref={ ref }
        { ...prop }
        value={ value }
        onChangeText={ setValue }
        cellCount={ CELL_COUNT }
        rootStyle={ Styles.codeFieldRoot }
        keyboardType='number-pad'
        // textContentType='oneTimeCode'
        renderCell={ ({ index, symbol, isFocused }) => (
          <View key={ index } style={ Styles.containerOtp }>
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
      <View style={ { marginTop: 20 } }>
        <Text size='s' color={ Colors.defaultColor } weight='semibold' textAlign='center' mb={ 20 }>{ hours + ':' + (timerCount % 60 ? finalSecond : '00') }</Text>
        <Text size='s' color={ Colors.defaultColor } weight='medium' textAlign='center'>Tidak menerima kode OTP?</Text>
        <TouchableOpacity
          onPress={ resetTimer }
          disabled={ timerCount !== 0 }
        >
          <Text size='s' textAlign='center' weight='bold' color={ timerCount === 0 ? Colors.primary : Colors.defaultColor }>KIRIM ULANG KODE OTP ANDA
          </Text>
        </TouchableOpacity>
      </View>
      <CustomModal
        modalVisible= { !!loading.activateUserFetch ?? false }
        type='loading'
        titleTwo='Tunggu Sebentar...'
      />
      <CustomModal
        modalVisible= { modalVisible }
        type='default'
        titleOne='Aktifasi Berhasil'
        titleTwo='Silahkan Login Akun anda'
        textBtn='Oke'
        onPress={ () => success() }
        btn
      />
    </View>
  );
};

export default Otp;

import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, CustomTextInput, Button, CustomModal } from 'components/';
import Styles from './style';
import Images from 'consts/Images';
import { Formik } from 'formik';
import * as Yup from 'yup';
import form from 'helpers/form';
import navigation from 'helpers/navigation';
import screenName from 'config/screenName';
import { Colors } from 'src/utils/colors';
import Dispatches from 'consts/Dispatches';

import { loginFetch, reqOtpFetch } from 'redux-app/auth/actions';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.misc.loading);
  const auth = useSelector(state => state.auth.auth);
  const [phone, setPhone] = useState('');
  console.log(phone, 'phone');

  const loginValidationSchema = Yup.object().shape({
    phone: form.phonePattern,
    pin: form.pinPattern,
  });

  const handleLoginFetch = val => {
    val.phone = form.stringToPhoneNumber(val.phone);
    const value = {
      phone: form.phoneNumberToString(val.phone),
      password: val.pin,
    };
    setPhone(value?.phone);
    dispatch(
      loginFetch({
        data: value,
      }),
    );
  };

  useEffect(() => {
    if (auth?.msg === 'user inactive, validated otp') {
      dispatch(
        reqOtpFetch({
          data: { phone: phone },
        }),
      );
      navigation.replace(screenName.OTP, { phone: phone });
      dispatch({
        type: Dispatches.LOGIN_RESPONSE,
        response: [],
      });
    }
  }, [auth?.msg]);

  return (
    <View style={ Styles.container }>
      <View style={ Styles.containerLogo }>
        <Image source={ Images.iconName } style={ Styles.logo } />
      </View>
      <View style={ Styles.mainContainer }>
        <Text weight='bold' size='xl' >
          Login
        </Text>
        <Formik
          initialValues={ {
            phone: '',
            pin: '',
          } }
          validationSchema={ loginValidationSchema }
          onSubmit={ handleLoginFetch }>
          { ({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <CustomTextInput
                isPhonenumber
                placeholder='No HP'
                onChangeText={ handleChange('phone') }
                onBlur={ handleBlur('phone') }
                value={ values.phone.length >= 10 ? form.stringToPhoneNumber(values.phone) : values.phone }
                keyboardType={ 'numeric' }
              />
              { errors.phone && touched.phone && (
                <Text size='xxs' color={ Colors.error }>{ errors.phone }</Text>
              ) }
              <CustomTextInput
                placeholder='PIN'
                onChangeText={ handleChange('pin') }
                onBlur={ handleBlur('pin') }
                value={ values.pin }
                keyboardType={ 'numeric' }
                isPassword
              />
              { errors.pin && touched.pin && (
                <Text size='xxs' color={ Colors.error }>{ errors.pin }</Text>
              ) }
              <View style={ Styles.containerRegister }>
                <TouchableOpacity activeOpacity={ 0.8 }>
                  <Text size={ 'xxs' } weight={ 'medium' } >Lupa pin?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => navigation.navigate(screenName.REGISTER) } activeOpacity={ 0.8 }>
                  <Text size={ 'xxs' } weight={ 'medium' } >Belum punya akun?</Text>
                </TouchableOpacity>
              </View>
              <Button
                text='Masuk'
                mode='default'
                style={ Styles.btn }
                onPress={ handleSubmit }
              />
            </>
          ) }
        </Formik>
      </View>
      <CustomModal
        modalVisible= { !!loading.loginFetch ?? false }
        type='loading'
        titleTwo='Tunggu Sebentar...'
      />
    </View>
  );
};

export default Login;

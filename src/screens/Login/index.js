import React from 'react';
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

import { loginFetch } from 'redux-app/auth/actions';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.misc.loading);

  console.log(loading);

  const loginValidationSchema = Yup.object().shape({
    phone: form.phonePattern,
    pin: form.pinPattern,
  });

  const handleLoginFetch = val => {
    const value = {
      phone: val.phone,
      password: val.pin,
    };
    dispatch(
      loginFetch({
        data: value,
      }),
    );
  };

  // async function handleLogin() {
  //   // console.log();
  //   const val = {
  //     phonename: 'admin',
  //     pinword: 'admin',
  //   };
  //   try {
  //     const result = await apiRequest(endpoints.login, 'post', val);
  //     console.log(result);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // const handleLoginFetch = val => {
  //   dispatch(
  //     loginFetch({
  //       data: val,
  //     }),
  //   );
  // };

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
                placeholder='No HP'
                onChangeText={ handleChange('phone') }
                onBlur={ handleBlur('phone') }
                value={ values.phone }
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

import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Text, CustomTextInput, Button, CustomModal } from 'components/';
import Styles from './style';
import Images from 'consts/Images';
import { Formik } from 'formik';
import * as Yup from 'yup';
import form from 'helpers/form';
import { Colors } from 'src/utils/colors';
import Dispatches from 'consts/Dispatches';

import { registerFetch } from 'redux-app/auth/actions';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector(state => state.misc.loading);
  const messageRegister = useSelector(state => state.auth.messageRegister);

  const registerValidationSchema = Yup.object().shape({
    phone: form.phonePattern,
    name: form.namePattern,
    pin: form.pinPattern,
    rewritePin: form.pinPattern,
  });
  
  // () => navigation.navigate(screenName.MAIN)

  const handleRegisterFetch = val => {
    if (val.pin === val.rewritePin) {
      const value = {
        full_name : val.name,
        phone : val.phone,
        password : val.pin,
      };
      dispatch(
        registerFetch({
          data: value,
        }),
      );
    }
  };

  useEffect(() => {
    // console.log(messageRegister, 'register');
    if (messageRegister === 'success') {
      setModalVisible(true);
    }
  }, [messageRegister]);

  const buttonModalFunc = () => {
    dispatch({
      type: Dispatches.REGISTER_RESPONSE,
      response: '',
    });
    setModalVisible(false);
  };
  

  return (
    <View style={ Styles.container }>
      { /* <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={ keyboardVerticalOffset }> */ }
      <View style={ Styles.containerLogo }>
        <Image source={ Images.iconName } style={ Styles.logo } />
      </View>
      <ScrollView showsVerticalScrollIndicator={ false }>
        <View style={ Styles.mainContainer }>
          <Text weight='bold' size='xl' >
          Register
          </Text>
          <Formik
            initialValues={ {
              phone: '',
              name: '',
              pin: '',
              rewritePin:'',
            } }
            validationSchema={ registerValidationSchema }
            onSubmit={ handleRegisterFetch }>
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
                  keyboardType={ 'phone-pad' }
                  value={ values.phone }
                />
                { errors.phone && touched.phone && (
                  <Text size='xxs' color={ Colors.error }>{ errors.phone }</Text>
                ) }
                <CustomTextInput
                  placeholder='Nama Lengkap'
                  onChangeText={ handleChange('name') }
                  onBlur={ handleBlur('name') }
                  value={ values.name }
                />
                { errors.name && touched.name && (
                  <Text size='xxs' color={ Colors.error }>{ errors.name }</Text>
                ) }
                <CustomTextInput
                  placeholder='PIN'
                  onChangeText={ handleChange('pin') }
                  onBlur={ handleBlur('pin') }
                  value={ values.pin }
                  keyboardType={ 'number-pad' }
                  isPassword
                />
                { errors.pin && touched.pin && (
                  <Text size='xxs' color={ Colors.error }>{ errors.pin }</Text>
                ) }
                <CustomTextInput
                  placeholder='Ulangi PIN'
                  onChangeText={ handleChange('rewritePin') }
                  onBlur={ handleBlur('rewritePin') }
                  value={ values.rewritePin }
                  keyboardType={ 'number-pad' }
                  isPassword
                />
                { errors.rewritePin && touched.rewritePin && (
                  <Text size='xxs' color={ Colors.error }>{ errors.rewritePin }</Text>
                ) }
                { values.rewritePin.length === 6 && values.rewritePin !== values.pin  && (
                  <Text size='xxs' color={ Colors.error }>PIN harus sama</Text>
                )
                }
                <Button
                  text='Daftar'
                  mode='default'
                  style={ Styles.btn }
                  onPress={ handleSubmit }
                />
              </>
            ) }
          </Formik>
        </View>
      </ScrollView>
      <CustomModal
        modalVisible= { modalVisible }
        type='default'
        titleOne='Register Berhasil'
        titleTwo='Silahkan Cek WA anda untuk mendapatkan kode OTP'
        textBtn='Oke'
        onPress={ buttonModalFunc }
        btn
      />
      <CustomModal
        modalVisible= { !!loading.registerFetch ?? false }
        type='loading'
        titleTwo='Tunggu Sebentar...'
      />
      { /* </KeyboardAvoidingView> */ }
    </View>
  );
};

export default Register;

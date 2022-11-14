import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Text, CustomTextInput, Button } from 'components/';
import Styles from './style';
import Images from 'consts/Images';
import { Formik } from 'formik';
import * as Yup from 'yup';
import form from 'helpers/form';
import navigation from 'helpers/navigation';
import screenName from 'config/screenName';
import { Colors } from 'src/utils/colors';

const Register = () => {

  const registerValidationSchema = Yup.object().shape({
    phone: form.phonePattern,
    name: form.namePattern,
    pin: form.pinPattern,
    rewritePin: form.pinPattern,
  });

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
            onSubmit={ () => navigation.navigate(screenName.MAIN) }>
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
        
      { /* </KeyboardAvoidingView> */ }
    </View>
  );
};

export default Register;

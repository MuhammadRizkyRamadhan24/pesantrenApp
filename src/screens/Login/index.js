import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, CustomTextInput, Button } from 'components/';
import Styles from './style';
import Images from 'consts/Images';
import { Formik } from 'formik';
import * as Yup from 'yup';
import navigation from 'helpers/navigation';
import screenName from 'config/screenName';
// import { loginFetch } from 'redux-app/auth/actions';
import form from 'helpers/form';
// import { useDispatch } from 'react-redux';

const Login = () => {
  // const dispatch = useDispatch();

  const loginValidationSchema = Yup.object().shape({
    user: form.usernamePattern,
    pass: form.passwordPattern,
  });

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
        <Image source={ Images.icon } style={ Styles.logo } />
      </View>
      <View style={ Styles.mainContainer }>
        <Text weight='bold' size='xl'>
          Login
        </Text>
        <Formik
          initialValues={ {
            user: 'TEST',
            pass: 'N1234',
          } }
          validationSchema={ loginValidationSchema }
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
                placeholder='Username'
                onChangeText={ handleChange('user') }
                onBlur={ handleBlur('user') }
                value={ values.user }
              />
              { errors.user && touched.user && (
                <Text style={ { fontSize: 10, color: 'red' } }>{ errors.user }</Text>
              ) }
              <CustomTextInput
                placeholder='Password'
                onChangeText={ handleChange('pass') }
                onBlur={ handleBlur('pass') }
                value={ values.pass }
                isPassword
              />
              { errors.pass && touched.pass && (
                <Text style={ { fontSize: 10, color: 'red' } }>{ errors.pass }</Text>
              ) }
              <View style={ { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 } }>
                <TouchableOpacity activeOpacity={ 0.8 }>
                  <Text size={ 'xxs' } weight={ 'medium' }>Lupa password?</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={ 0.8 }>
                  <Text size={ 'xxs' } weight={ 'medium' }>Belum punya akun?</Text>
                </TouchableOpacity>
              </View>
              <Button
                text='Login'
                mode='default'
                style={ Styles.btn }
                onPress={ handleSubmit }
              />
            </>
          ) }
        </Formik>
      </View>
    </View>
  );
};

export default Login;

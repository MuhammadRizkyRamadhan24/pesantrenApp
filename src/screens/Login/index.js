import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, CustomTextInput, Button } from 'components/';
import Styles from './style';
import Images from 'consts/Images';
import { Formik } from 'formik';
import * as Yup from 'yup';
import form from 'helpers/form';
import { apiRequest } from 'helpers/form';
import endpoints from 'config/endpoints';
import navigation from 'helpers/navigation';
import screenName from 'config/screenName';
import { Colors } from 'src/utils/colors';

// import { loginFetch } from 'redux-app/auth/actions';
// import { useDispatch } from 'react-redux';

const Login = () => {
  // const dispatch = useDispatch();

  const loginValidationSchema = Yup.object().shape({
    username: form.usernamePattern,
    password: form.passwordPattern,
  });

  async function handleLogin() {
    // console.log();
    const val = {
      usernamename: 'admin',
      passwordword: 'admin',
    };
    try {
      const result = await apiRequest(endpoints.login, 'post', val);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

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
        <Text weight='bold' size='xl' >
          Login
        </Text>
        <Formik
          initialValues={ {
            username: '',
            password: '',
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
                onChangeText={ handleChange('username') }
                onBlur={ handleBlur('username') }
                value={ values.username }
              />
              { errors.username && touched.username && (
                <Text size='xxs' color={ Colors.error }>{ errors.username }</Text>
              ) }
              <CustomTextInput
                placeholder='Password'
                onChangeText={ handleChange('password') }
                onBlur={ handleBlur('password') }
                value={ values.password }
                isPassword
              />
              { errors.password && touched.password && (
                <Text size='xxs' color={ Colors.error }>{ errors.password }</Text>
              ) }
              <View style={ Styles.containerRegister }>
                <TouchableOpacity activeOpacity={ 0.8 }>
                  <Text size={ 'xxs' } weight={ 'medium' } >Lupa password?</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={ 0.8 }>
                  <Text size={ 'xxs' } weight={ 'medium' } >Belum punya akun?</Text>
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

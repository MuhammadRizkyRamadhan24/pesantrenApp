import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import screenRouters from 'src/config/screen';
import navigation from 'helpers/navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import screenName from 'config/screenName';

const Stack = createStackNavigator();

const Router = () => {
  const [currentRouteName, setCurrentRouteName] = useState(screenName.LOGIN);
  const auth = useSelector(state => state.auth.auth);
  
  useEffect(() => {
    if (auth.accessToken) {
      // Home
      navigation.replace(screenName.MAIN);
    } else {
      // Login
      navigation.replace(screenName.LOGIN);
    }
  }, [auth]);

  return (
    <NavigationContainer
      ref={ navigation.navigationRef }
      onReady={ () =>
        (navigation.routeNameRef.current =
          navigation.navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={ async() => {
        const previousRouteName = navigation.routeNameRef.current;
        const _currentRouteName =
          navigation.navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== _currentRouteName) {
          setCurrentRouteName(_currentRouteName);
        }

        navigation.routeNameRef.current = _currentRouteName;
      } }>
      <StatusBar barStyle='dark-content' backgroundColor={ 'white' } />

      <Stack.Navigator
        screenOptions={ {
          animationEnabled: false,
        } }
        initialRouteName={ currentRouteName }
        headerMode='none'>
        { screenRouters.map((route, index) => (
          <Stack.Screen
            key={ index }
            name={ route.name }
            component={ route.component }
            options={ route.options }
          />
        )) }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

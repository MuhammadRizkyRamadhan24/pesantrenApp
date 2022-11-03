import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import screenRouters from 'src/config/screen';
import navigation from 'helpers/navigation';
import { createStackNavigator } from '@react-navigation/stack';
// import { useSelector } from 'react-redux';
import screenName from 'config/screenName';

const Stack = createStackNavigator();

const Router = () => {
  const [currentRouteName, setCurrentRouteName] = useState(screenName.LOGIN);

  // const auth = useSelector(state => state.auth.auth);

  // useEffect(() => {
  //   if (auth.USER_ID) {
  //     // Home
  //     navigation.navigate(screenName.HOME);
  //   } else {
  //     // Login
  //     navigation.navigate(screenName.LOGIN);
  //   }
  // }, []);

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

import React from 'react';
import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Images } from 'consts/index';
import { Text } from 'components/';
import { NavigationHelper } from 'helpers/index';
import Home from 'screens/Home';
import Cards from 'screens/Cards';
import Profile from 'screens/Profile';
import History from 'screens/History';
import Payment from 'screens/Payment';

const BottomTab = createBottomTabNavigator();
const bottomTabScreenOptions = { unmountOnBlur: true, height: 200 };
const bottomTabScreens = [
  { name: 'home', component: Home },
  { name: 'cards', component: Cards },
  { name: 'payment', component: Payment },
  { name: 'history', component: History },
  { name: 'profile', component: Profile },
];

const BottomTabNav = () => {
  const listeners = ({ route }) => ({
    tabPress: e => {
      e.preventDefault();
      NavigationHelper.resetTabNav(route.name);
    },
  });

  return (
    <BottomTab.Navigator
      lazy={ true }
      initialRouteName='Home'
      tabBarOptions={ {
        keyboardHidesTabBar: true,
        showLabel: false,
      } }
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let imageFocused, imageUnFocused;

          switch (route.name) {
          case 'home':
            imageFocused = Images.homeFocused;
            imageUnFocused = Images.home;
            break;
          case 'cards':
            imageFocused = Images.cardBottomFocused;
            imageUnFocused = Images.cardBottom;
            break;
          case 'payment':
            imageFocused = Images.cardBottomFocused;
            imageUnFocused = Images.cardBottom;
            break;
          case 'history':
            imageFocused = Images.historyFocused;
            imageUnFocused = Images.history;
            break;
          case 'profile':
            imageFocused = Images.profileFocused;
            imageUnFocused = Images.profile;
            break;
          }
          const sourceImage = focused ? imageFocused : imageUnFocused;
          return (
            <View
              style={ {
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 2,
              } }>
              <Image
                source={ sourceImage }
                style={ {
                  width: route.name === 'postInput' ? 60 : 20,
                  height: route.name === 'postInput' ? 60 : 20,
                } }
              />
              <Text
                color={ focused ? '#0374bf' : '#404040' }
                weight={ 'medium' }
                style={ { paddingTop: 2, fontSize: 10 } }>
                { route.name === 'home'
                  ? 'Beranda'
                  : route.name === 'cards'
                    ? 'Kartu'
                    : route.name === 'history'
                      ? 'History'
                      : route.name === 'profile'
                        ? 'Akun'
                        : route.name === 'payment'
                          ? 'Pembayaran'
                          : null }
              </Text>
            </View>
          );
        },
      }) }>
      { bottomTabScreens.map((screen, index) => (
        <BottomTab.Screen
          key={ index }
          name={ screen.name }
          component={ screen.component }
          options={ bottomTabScreenOptions }
          // listeners={listeners}
        />
      )) }
    </BottomTab.Navigator>
  );
};

export default BottomTabNav;

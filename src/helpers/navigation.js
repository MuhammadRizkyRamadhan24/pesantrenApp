import React from 'react';
import { CommonActions, StackActions } from '@react-navigation/native';

const navigationRef = React.createRef();
const routeNameRef = React.createRef();

const navigate = (name, params = {}) => {
  navigationRef.current?.navigate(name, params);
};

const goBack = () => {
  navigationRef.current?.goBack();
};

const resetNav = (routeName, params = {}) => {
  const resetAction = CommonActions.reset({
    index  : 0,
    routes : [
      {
        name: routeName,
        params,
      },
    ],
  });

  navigationRef.current?.dispatch(resetAction);
};

const resetTabNav = (screenName, params = {}) => {
  navigationRef.current?.dispatch({
    ...CommonActions.reset({
      index  : 0,
      routes : [
        {
          name  : 'main',
          state : {
            routes: [{ name: screenName, params }],
          },
        },
      ],
    }),
  });
};

const replace = (routeName, params = {}) => {
  navigationRef.current?.dispatch(StackActions.replace(routeName, params));
};

const pop = popCount => {
  const popAction = StackActions.pop(popCount);

  navigationRef.current?.dispatch(popAction);
};

const popToTop = () => {
  navigationRef.current?.dispatch(StackActions.popToTop());
};

const push = (routeName, params = {}) => {
  const pushAction = StackActions.push(routeName, params);

  navigationRef.current?.dispatch(pushAction);
};

const removeScreenFromStack = arrRoutes => {
  navigationRef.current?.dispatch(state => {
    const routes = state.routes.filter(item => !arrRoutes.includes(item.name));

    return CommonActions.reset({
      ...state,
      routes,
      index: routes.length - 1,
    });
  });
};

const beforeRemove = (navigation, handler, params, continueAction = false) => {
  const isContinueAction = continueAction;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      e.preventDefault(); // Prevent default action
      unsubscribe(); // Unsubscribe the event on first call to prevent infinite loop

      if (!isContinueAction && handler) {
        handler(); // Handling before screen removed
      } else {
        navigation.dispatch(e.data.action);
      }
    });
  }, [navigation, isContinueAction, params?.param1, params?.param2]);
};

const verticalAnimation = {
  gestureEnabled        : false,
  cardStyleInterpolator : ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange  : [0, 1],
              outputRange : [layouts.screen.height, 0],
            }),
          },
        ],
      },
    };
  },
};

export default {
  navigationRef,
  routeNameRef,
  verticalAnimation,
  pop,
  popToTop,
  push,
  navigate,
  resetNav,
  goBack,
  resetTabNav,
  replace,
  removeScreenFromStack,
  beforeRemove,
};

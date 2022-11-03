import screenName from './screenName';
import Home from 'screens/Home';
import Profile from 'screens/Profile';
import Cards from 'screens/Cards';
import Login from 'screens/Login';
import BottomTabNav from 'components/BottomTab';

const screenList = (name, component, options = {}) => ({
  name,
  component,
  options,
});

const screenRouters = [
  screenList(screenName.HOME, Home),
  screenList(screenName.PROFILE, Profile),
  screenList(screenName.CARDS, Cards),
  screenList(screenName.LOGIN, Login),
  screenList(screenName.MAIN, BottomTabNav),
];

export default screenRouters;

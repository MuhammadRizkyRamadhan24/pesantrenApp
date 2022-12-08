import { StyleSheet, Platform } from 'react-native';

const Styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 20,
    marginTop: 20,
  },
  wrapperIcon: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperTitte: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 30 : 20,
    paddingHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  divImage: {
    width: 100,
    height: 48,
    justifyContent: 'center',
  },
  image: {
    width: undefined,
    height: 48,
  },
  iconLogout: {
    flex: 1,
    flexDirection: 'row-reverse',
    width: 48,
    height: 48,
    alignItems: 'center',
  },
});

export default Styles;

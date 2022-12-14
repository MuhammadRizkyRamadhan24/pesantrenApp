import { StyleSheet } from 'react-native';
import { Colors } from 'src/utils/colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    height:60,
  },
  containerNameUser: {
    backgroundColor: Colors.white,
  },
  containerBottom: {
    paddingBottom: 5,
    backgroundColor: Colors.white,
    elevation: 2,
  },
  containerCard: {
    flexDirection: 'row',
    width: '100%',
  },
  containerCoreMenu: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerSecondaryMenu: {
    justifyContent: 'space-around',
    alignItems: 'center',
    // paddingHorizontal: 20,
  },
});

export default Styles;

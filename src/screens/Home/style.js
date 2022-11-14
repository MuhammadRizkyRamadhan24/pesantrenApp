import { StyleSheet } from 'react-native';
import { Colors } from 'src/utils/colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  maxWidthTextBottom: {
    maxWidth: 200,
    height: 30,
  },
  containerNameUser: {
    backgroundColor: Colors.primary,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  containerBalanceUser: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },
  addOnContainerTop:  {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingBottom: 100,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  containerBottom: { marginHorizontal: 20, marginTop: -80 },
  containerCard: { flexDirection: 'row', width: '100%' },
  containerCoreMenu: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerSecondaryMenu: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Styles;

import { StyleSheet } from 'react-native';
import { Colors } from 'src/utils/colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  containerTop: {
    backgroundColor: Colors.primary,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  logo: {
    width: 130,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  containerMenu: { flexDirection: 'row', justifyContent: 'space-around' },
});

export default Styles;

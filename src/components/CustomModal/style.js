import { StyleSheet } from 'react-native';
import { Colors } from 'src/utils/colors';

const Styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 30,
    alignItems: 'center',
  },
  button: {
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginTop: 20,
  },
  buttonClose: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  buttonCancel: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  buttonBorder: {
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  centeredViewLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalViewLoading: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 20,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default Styles;

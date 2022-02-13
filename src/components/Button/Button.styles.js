import {StyleSheet} from 'react-native';

export default {
  primary: StyleSheet.create({
    button: {
      margin: 10,
      backgroundColor: 'grey',
      borderRadius: 20,
    },
    label: {
      textAlign: 'center',
      fontSize: 18,
    },
  }),
  secondary: StyleSheet.create({
    button: {
      margin: 10,
      backgroundColor: 'black',
      borderRadius: 20,
    },
    label: {
      textAlign: 'center',
      fontSize: 20,
      color: 'white',
    },
  }),
};

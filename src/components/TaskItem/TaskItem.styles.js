import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  item_container: {
    margin: spacing.large,
    backgroundColor: colors.itemBackground,
  },
  itemDone: {
    textDecorationLine: 'line-through',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  decoration: {},
});

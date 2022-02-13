import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './Button.styles';

const Button = ({label, onPress, theme = 'primary'}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles[theme].button}>
      <Text style={styles[theme].label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

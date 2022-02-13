import React from 'react';
import {TextInput} from 'react-native';

import styles from './Input.styles';

const Input = ({...otherProps}) => {
  return (
    <>
      <TextInput {...otherProps} style={styles.input} />
    </>
  );
};

export default Input;

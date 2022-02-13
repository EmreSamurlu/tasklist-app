import {View, Text} from 'react-native';
import React from 'react';

import styles from './TaskItem.styles';

const TaskItem = ({emre}) => {
  return <Text style={styles.item}>{emre}</Text>;
};

export default TaskItem;

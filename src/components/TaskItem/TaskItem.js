import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './TaskItem.styles';

const TaskItem = ({id, onPress, text, isDone, longPress}) => {
  return (
    <View style={[styles.item_container, isDone && styles.itemDone]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPress(id)}
        onLongPress={() => longPress(id)}>
        <Text style={[styles.text, isDone && styles.decoration]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;

import {View, Alert} from 'react-native';
import React, {useState} from 'react';

import Input from '../Input';
import Button from '../Button';
import styles from './TaskInputArea.styles';

const TaskInputArea = ({onInput}) => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState();

  const handleAddTask = () => {
    if (task === '') {
      Alert.alert('Lütfen Geçerli Bir Değer Giriniz !!');
    } else if (taskList.some(todo => todo.text === task)) {
      Alert.alert('Bu Görev Zaten Mevcut!');
    } else {
      const item = {
        id: Date.now(),
        text: task,
        done: false,
      };
      setTaskList([...taskList, item]);
    }
    setTask('');
    onInput(task, taskList);
  };

  const handleEnterTask = text => {
    setTask(text);
  };

  return (
    <View style={styles.input_area}>
      <Input
        value={task}
        onChangeText={handleEnterTask}
        placeholder="Enter Task"
      />
      <Button onPress={handleAddTask} label="Add Task" />
    </View>
  );
};

export default TaskInputArea;

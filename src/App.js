import React, {useState} from 'react';
import {SafeAreaView, Text, View, Alert} from 'react-native';

import Button from './components/Button';
import Input from './components/Input';
// import TaskItem from './components/TaskItem';
import styles from './App.styles';

const App = () => {
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
      };
      setTaskList([...taskList, item]);
    }
  };

  const handleEnterTask = text => {
    setTask(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container_flat}>
        {taskList.map((item, index) => (
          <Text key={index}>{item.text}</Text>
        ))}
      </View>
      <View style={styles.input_area}>
        <Input
          value={task}
          onChangeText={handleEnterTask}
          placeholder="Enter Task"
        />
        <Button onPress={handleAddTask} label="Add Task" />
      </View>
    </SafeAreaView>
  );
};
export default App;

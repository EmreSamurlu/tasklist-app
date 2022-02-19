import React, {useState} from 'react';
import {SafeAreaView, View, Alert, FlatList, Text} from 'react-native';

import Button from './components/Button';
import Input from './components/Input';
import TaskItem from './components/TaskItem';
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
        done: false,
      };
      setTaskList([...taskList, item]);
    }
  };

  const handlePress = id => {
    setTaskList(
      taskList.map(item =>
        item.id === id ? {...item, done: !item.done} : {...item},
      ),
    );
  };

  const handleLongPress = id => {
    Alert.alert('Silmek istedinize emin misiniz?', '', [
      {
        text: 'İptal',
        style: 'cancel',
      },
      {text: 'Tamam', onPress: () => deleteItem(id)},
    ]);
  };

  const handleEnterTask = text => {
    setTask(text);
  };

  const deleteItem = id => {
    setTaskList(taskList.filter(item => item.id !== id));
  };

  const renderTaskItem = ({item}) => (
    <TaskItem
      id={item.id}
      onPress={handlePress}
      longPress={handleLongPress}
      text={item.text}
      isDone={item.done}
    />
  );

  // const notCompleted = () => {
  //   const tasks = taskList.filter(item => !item.done);

  //   return tasks;
  // };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todays Task List</Text>
      <FlatList
        data={taskList}
        renderItem={renderTaskItem}
        style={styles.mainContainer}
        keyExtractor={item => item.id.toString()}
      />
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

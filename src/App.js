import React, {useState} from 'react';
import {SafeAreaView, Alert, FlatList, Text} from 'react-native';

import TaskInput from './components/TaskInputArea';
import TaskItem from './components/TaskItem';
import styles from './App.styles';

const App = () => {
  const [data, setData] = useState([]);

  const handleInput = (task, taskList) => {
    if (!task || !taskList) {
      return Alert.alert('Alan Boş Bırakılamaz!');
    } else {
      const item = {
        text: task,
        data: taskList,
        id: new Date(),
      };
      setData([item, ...data]);
    }
  };

  const handlePress = id => {
    setData(
      data.map(item =>
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

  const deleteItem = id => {
    setData(data.filter(item => item.id !== id));
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
        data={data}
        renderItem={renderTaskItem}
        style={styles.mainContainer}
        keyExtractor={item => item.id.toString()}
      />
      <TaskInput onInput={handleInput} />
    </SafeAreaView>
  );
};

export default App;

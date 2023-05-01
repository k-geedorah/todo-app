import { View, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import Header from './components/header';
import ToDoItem from './components/todoitem';
import AddToDo from './components/addtodo';

const App = () => {
  const [tasks, setTasks] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'check email', key: '2' },
    { text: 'send update', key: '3' },
    { text: 'check DMs', key: '4' },
  ]);
  const handlePress = (key) => {
    setTasks((prevTasks) => { return prevTasks.filter(todo => todo.key != key) })
  }
  const handleSubmit = (text) => {
    setTasks((prevTasks) => { return [{ text: text, key: Math.random().toString() }, ...prevTasks] })

  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddToDo handleSubmit={handleSubmit} />
        <View style={styles.list}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <ToDoItem item={item} handlePress={handlePress} />
            )}
          />
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

export default App;
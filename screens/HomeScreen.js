import React, { useContext, useLayoutEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons
import { TodoContext } from "../context/TodoContext";

const HomeScreen = ({ navigation }) => {
  const { todos } = useContext(TodoContext);

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate("AddTodo")} title="Add" color="#388e3c" />
      ),
    });
  }, [navigation]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("TodoDetail", { todoId: item.id })}
      style={styles.todoItemContainer}
    >
      <Text style={styles.todoItemText}>
        {"\u2022"} {item.title}
      </Text>
      <Ionicons name="arrow-forward" size={24} color="#1b5e20" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <FlatList
        data={activeTodos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text>No active tasks</Text>}
      />
      <Text style={styles.header}>Done List</Text>
      <FlatList
        data={completedTodos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text>No completed tasks</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e8f5e9',
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    color: '#1b5e20',
  },
  todoItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#388e3c',
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  todoItemText: {
    fontSize: 18,
    color: '#1b5e20',
  },
});

export default HomeScreen;

import React, { useContext } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TodoContext } from "../context/TodoContext";

const TodoDetailScreen = ({ route, navigation }) => {
  const { todoId } = route.params;
  const { todos, markTodoAsDone, deleteTodo } = useContext(TodoContext);
  const todo = todos.find((todo) => todo.id === todoId);

  if (!todo) {
    return (
      <View style={styles.container}>
        <Text>Todo not found</Text>
        <Button
          title="Back to Home"
          onPress={() => navigation.navigate("Home")}
          color="#388e3c"
        />
      </View>
    );
  }

  const handleMarkAsDone = () => {
    markTodoAsDone(todoId);
    navigation.navigate("Home");
  };

  const handleDeleteTodo = () => {
    deleteTodo(todoId);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>{todo.title}</Text>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.description}>{todo.description}</Text>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.date}>{`Datum: ${todo.date}`}</Text>
        <TouchableOpacity onPress={handleDeleteTodo} style={styles.deleteButton}>
          <Ionicons name="trash" size={24} color="red" />
        </TouchableOpacity>
      </View>
      {!todo.completed && (
        <Button
          title="Klar"
          onPress={handleMarkAsDone}
          color="#388e3c"
          style={styles.markAsDoneButton}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e8f5e9',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleSection: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#388e3c',
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#1b5e20',
  },
  description: {
    fontSize: 18,
    color: '#1b5e20',
    textAlign: 'center',
  },
  date: {
    fontSize: 14,
    color: "gray",
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  markAsDoneButton: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    //transform: [{ translateX: -50% }],
  },
});

export default TodoDetailScreen;


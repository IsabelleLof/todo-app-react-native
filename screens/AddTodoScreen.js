import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { TodoContext } from "../context/TodoContext";

const AddTodoScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = () => {
    addTodo(title, description);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
        placeholderTextColor="#a5d6a7"
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
        placeholderTextColor="#a5d6a7"
        multiline={true}
      />
      <Button title="Done" onPress={handleAddTodo} color="#388e3c" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e8f5e9',
  },
  label: {
    fontSize: 18,
    marginBottom: 4,
    color: '#1b5e20',
  },
  input: {
    borderWidth: 1,
    borderColor: "#388e3c",
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
    color: '#1b5e20',
  },
});

export default AddTodoScreen;


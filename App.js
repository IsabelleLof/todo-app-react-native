import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import TodoProvider from "./context/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <AppNavigator />
    </TodoProvider>
  );
};

export default App;

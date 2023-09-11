import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface Props {
  children: React.ReactNode;
}

export const AppContext = React.createContext<TodoAppContext | null>(null);

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const addTodo = (todoDetails: string): void => {
    const newTodo: Todo = {
      id: uuidv4(),
      details: todoDetails,
      completed: false,
    };
    setTodos(state => ([...state, newTodo]));
  };

  const toggleTodoStatus = (todoId: string, status: boolean): void => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: status };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteOneTodo = (todoId: string): void => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const deleteCompletedTodos = (): void => {
    const updatedTodos = todos.filter((todo) => todo.completed === false);
    setTodos(updatedTodos);
  };

  const getActiveTodos = (): Todo[] => {
    return todos.filter(todo => todo.completed === false);
  };
  
  const getCompletedTodos = (): Todo[] => {
    return todos.filter(todo => todo.completed === true);
  };

  return (
    <AppContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodoStatus,
        deleteOneTodo,
        deleteCompletedTodos,
        getActiveTodos,
        getCompletedTodos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
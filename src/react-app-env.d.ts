/// <reference types="react-scripts" />

interface Todo {
  id: string;
  details: string;
  completed: boolean;
}

interface TodoAppContext {
  todos: Todo[];
  addTodo: (todoDetails: string) => void;
  toggleTodoStatus: (todoId: string, status: boolean) => void;
  deleteOneTodo: (todoId: string) => void;
  deleteCompletedTodos: () => void;
  getActiveTodos: () => Todo[];
  getCompletedTodos: () => Todo[];
}
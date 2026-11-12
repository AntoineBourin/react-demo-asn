import { useReducer, useState } from "react";

type TodoAction =
  | { type: "ADD_TODO"; todo: string }
  | { type: "DELETE_TODO"; todo: string }
  | { type: "COMPLETE_TODO" };

function todoReducer(
  state: { todos: Array<string>; completedTodos: number },
  action: TodoAction,
) {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todos: [...state.todos.filter((el) => el !== action.todo)],
      };
    }
    case "COMPLETE_TODO": {
      return {
        ...state,
        completeTodos: state.completedTodos + 1,
        todos: [],
      };
    }
  }
}

export default function TodoList() {
  const [todoText, setTodoText] = useState("");
  const [store, dispatch] = useReducer(todoReducer, {
    todos: [],
    completedTodos: 0,
  });

  const handleDeleteTodo = (todo: string) => {
    dispatch({ type: "DELETE_TODO", todo });
  };

  const handleAddTodo = () => {
    dispatch({ type: "ADD_TODO", todo: todoText });
  };

  const handleDeleteAllTodo = () => {};

  const handleDeleteFirst = () => {};

  return (
    <div>
      <input
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        type="text"
        name="todo"
        placeholder="Ajouter une todo..."
      />
      <button onClick={handleAddTodo}>Ajouter</button>
      <button onClick={handleDeleteAllTodo}>Tout supprimer</button>
      <button onClick={handleDeleteFirst}>Supprimer le premier</button>
      <ul>
        {store.todos.map((todo) => (
          <li key={todo} onClick={() => handleDeleteTodo(todo)}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

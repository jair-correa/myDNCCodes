import { useEffect, useState } from 'react';
import './App.css';
import { useTheme } from './useTheme';

interface TodoItem {
  id: string;
  texto: string;
  completed: boolean;
}

function App() {
  const keyMemoryTask = 'tasks';

  const { theme, toogleTheme } = useTheme();
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const addTask = (): void => {
    if (newTodo !== '') {
      const newId = crypto.randomUUID();
      const newToddoItem: TodoItem = {
        id: newId,
        texto: newTodo,
        completed: false,
      };
      setTodos([...todos, newToddoItem]);
      setNewTodo('');
    }
  };
  const removeTask = (id: string): void => {
    const taskUpdated = todos.filter(todo => todo.id !== id);
    setTodos(taskUpdated);
  };
  const markComplete = (id: string): void => {
    const allUpdated = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(allUpdated);
  };
  const getCompleteTask = (): TodoItem[] => {
    return todos.filter(todo => todo.completed);
  };

  useEffect(() => {
    if (isLoad) {
      localStorage.setItem(keyMemoryTask, JSON.stringify(todos));
    }
  }, [todos, isLoad]);

  useEffect(() => {
    const memoryTask = localStorage.getItem(keyMemoryTask);

    if (memoryTask) {
      setTodos(JSON.parse(memoryTask));
    }

    setIsLoad(true);
  }, []);
  return (
    <div className={`app ${theme}`}>
      <div className={`container ${theme}`}>
        <h1>
          Lista de tarefas - {getCompleteTask().length} / {todos.length}
        </h1>
        <div className='input-container'>
          <input type='text' value={newTodo} onChange={e => setNewTodo(e.target.value)} />
          <button onClick={addTask}>Adicionar Tarefa</button>
        </div>
        <ol>
          {todos.map(todo => (
            <li key={todo.id}>
              <input type='checkbox' checked={todo.completed} onChange={() => markComplete(todo.id)} />
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.texto}</span>
              <button onClick={() => removeTask(todo.id)}>Remove</button>
            </li>
          ))}
        </ol>
        <button onClick={toogleTheme}>Alterar o tema {theme === 'light' ? 'escuro' : 'claro'}</button>
      </div>
    </div>
  );
}

export default App;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodoTask {
  id: string;
  task: string;
  priority: string;
  category: string;
}

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todoTasks');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const saveState = (state: Array<TodoTask>) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todoTasks', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const initialState: Array<TodoTask> = loadState();

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TodoTask>) => {
      const newTask = {
        id: action.payload.id,
        task: action.payload.task,
        priority: action.payload.priority,
        category: action.payload.category,
      };
      state.push(newTask);
      saveState(state);
    },
    removeTask: (state, action: PayloadAction<TodoTask>) => {
      const newState = state.filter((t) => t.id !== action.payload.id);
      saveState(newState);
      return newState;
    },
  },
});

export const { addTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;
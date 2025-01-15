import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TodoTask {
  id: string;
  task: string;
  priority: string;
  category: string;
//   user: string;
}

const initialState: Array<TodoTask> = [];

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    addTask: (state, action : PayloadAction<TodoTask>) => {
        const newTask = {
            id: action.payload.id,
            task: action.payload.task,
            priority: action.payload.priority,
            category: action.payload.category,
            // user: action.payload.user
        }
        state.push(newTask)
    },
    removeTask: (state, action: PayloadAction<TodoTask>) => {
      return state.filter((t) => t.id !== action.payload.id);
  }
 }
})

export const { addTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer
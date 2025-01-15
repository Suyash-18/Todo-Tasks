import { Provider } from "react-redux"
import {store} from "./redux/store"
import TaskInput from "./components/TaskInput"
import Todo from "./components/Todo"
import TaskList from "./components/TaskList"
import { useState } from "react"
import { Toaster } from "react-hot-toast"

function App() {
  const [add, setAdd] = useState(false)

  return (
    <Provider store={store}>
      <Todo setAdd={setAdd}/>
      {add && <TaskInput setAdd={setAdd} />}
      <TaskList/>
      <Toaster position="top-right" reverseOrder={false}/>
    </Provider>
  )
}

export default App

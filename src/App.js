import React from 'react';
import { useState } from 'react'
import { AppRoutes } from './routes/routes';
import { MuiNavbar } from './components/MuiNavbar';
// import FirebaseLogin from './components/FirebaseLogin'
// import 'firebase/auth';




// // custom hook
import useLocalStorage from './hooks/useLocalStorage';

// custom components
// import CustomForm from './components/CustomForm'
import EditForm from './components/todo/EditForm'
import TaskList from './components/todo/TaskList'

//task handling
function App() {
  const [tasks, setTasks] = useLocalStorage(`react-todo.tasks`, []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id
        ? { ...t, checked: !t.checked }
        : t
    )))
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
        ? { ...t, name: task.name }
        : t
    )))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }

  return (
    <div className="container1">
     
      <MuiNavbar />
      {/* <FirebaseLogin /> */}
      <AppRoutes addTask={addTask} /> {/* just need to make sure you pass the props to the routes so the CustomForm component can work when called from there */}
       
      <header>
        <h1>Sign In Above</h1>
      </header>
      {
        isEditing && (
          <EditForm
            editedTask={editedTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
          />
        )
      }
      {/* <CustomForm addTask={addTask} /> */}
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  )
}

export default App
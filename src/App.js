import { Grid, Button } from '@mui/material';
import React from 'react';
import { useNavigate,} from 'react-router-dom';
import { useState } from 'react'
import { AppRoutes } from './routes/routes';

// custom hook
import useLocalStorage from './hooks/useLocalStorage';

// custom components
import CustomForm from './components/CustomForm'
import EditForm from './components/EditForm'
import TaskList from './components/TaskList'

//task handling
function App() {
  const navigate = useNavigate();
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
    <div className="container">

      <Grid container>
        <Grid item xs>
          <Button onClick={() => navigate("/calendarWithBooking")}>Calendar</Button>
        </Grid>
        <Grid item xs>
          <Button onClick={() => navigate("/notes")}>notes</Button>
        </Grid>
        <Grid item xs>
          <Button onClick={() => navigate("/form")}>Tasks</Button>
        </Grid>
      </Grid>
      <AppRoutes />

      <header>
        <h1>My Task List</h1>
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
      <CustomForm addTask={addTask} />
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
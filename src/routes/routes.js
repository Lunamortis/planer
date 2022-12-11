import React, { } from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomForm from '../components/todo/CustomForm';
import Notes from '../components/notes/Notes';
import LogIn from '../components/LogIn';
import Home from '../components/Home';
import ContactUs from '../components/ContactUs';

export const AppRoutes = (props) => {
    return (
        <Routes>
            <Route path='/home' element={<Home {...props} />} />
            <Route exact path='/' element={<Home {...props} />} />
            <Route path="/" element={<Notes />} />
            <Route path="/Form" element={<CustomForm {...props}/>} />
            <Route path= "/Notes" element={<Notes {...props}/>} />
            <Route path="/todo/ContactUs" element={<ContactUs {...props}/>} />
            <Route path="/LogIn" element={<LogIn {...props}/>} />

            <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
    );
}

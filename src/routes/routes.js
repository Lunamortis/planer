import React, { } from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomForm from '../components/CustomForm';
import Notes from '../components/Notes';
import CalendarWithBooking from '../components/Calendar';
import Home from '../components/Home';

export const AppRoutes = (props) => {
    return (
        <Routes>
            <Route path='/home' element={<Home {...props} />} />
            <Route exact path='/' element={<Home {...props} />} />
            <Route path="/" element={<Notes />} />
            <Route path="/CalendarWithBooking" element={<CalendarWithBooking {...props} />} />
            <Route path="/Form" element={<CustomForm {...props}/>} />
            <Route path= "/Notes" element={<Notes {...props}/>} />
        </Routes>
    );
}

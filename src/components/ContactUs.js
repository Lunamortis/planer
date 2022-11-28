import { useState } from "react";
const ContactUsForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });
    
    const handleChange = (e) => {
        setFormState({
        ...formState,
        [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    };
    
    return (
        <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" defaultValue={formState.name} onChange={handleChange} name="name" />
        </div>
        <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" defaultValue={formState.email} onChange={handleChange} name="email" />
        </div>
        <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" defaultValue={formState.message} onChange={handleChange} rows="5" />
        </div>
        <button type="submit">Submit</button>
        </form>
    );
}

export default ContactUsForm;
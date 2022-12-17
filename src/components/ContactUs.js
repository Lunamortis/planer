import {useState}from 'react';
import '../style/Contact.css';

const MuiContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='form-label' htmlFor="name">Name</label>
          <input
          className='message'
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className='form-label' htmlFor="email">Email</label>
          <input
          className='message'
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className='form-label' htmlFor="message">Message</label>
          <textarea
          className = "message"
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="form-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default MuiContactForm;
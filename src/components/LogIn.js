import { useState } from "react";
import "../style/login.css";


const LogIN = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password); 
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <label className="form-label">Username</label>
        <input
        className = "message"
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className='form-label'>Password</label>
        <input
        className = "message"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" onClick={handleSubmit}>
          Log In  
        </button>
        <button className="loginButton" onClick={handleSubmit}>
          Log Out  
        </button>
      </div>
    </div>
  );
};

export default LogIN;
import React ,{ useState } from "react";
import "./register.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
      const response = await fetch("http://localhost:8080/api/v1/register", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, username, password }),
      });
  
      if (!response.ok) {
          const data = await response.json();
          if(data.error === "User already exists"){
             throw new Error("User already exists");
          } else {
              throw new Error("Failed to Register in");
          } }

          const data = await response.json();
          console.log(data);
          setRegisterStatus("Register in successfully");
      } catch (error) {
          setRegisterStatus(error.message);
      }
  };
    return (
      <form onSubmit={handleSubmit} className="register-form">
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Register</button>
      <p>{registerStatus}</p>

</form>
    );
};

export default Register;
import React ,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';




function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/v1/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
    
            if (!response.ok) {
                throw new Error('Login failed');
            }
    
            const data = await response.json();
            console.log(data);
            setLoginStatus("Logged in successfully");
        } catch (error) {
            console.error('Error:', error);
            setLoginStatus("Failed to log in");
        }
    };
    return (
       <form onSubmit={handleSubmit} className="login-form">
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
           <button type="submit">Login</button>
           <div>{loginStatus}</div> {/* Wyświetl status logowania */}
       </form>
    );
};


export default Login;
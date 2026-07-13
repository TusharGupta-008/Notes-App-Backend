import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Sign from "./Sign";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          email,
          password,
        },
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="container">
      <h1>Log In</h1>
      Email:{" "}
      <input
        value={email}
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      Password:{" "}
      <input
        value={password}
        placeholder="Enter your password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="bottom-section">
        <button onClick={handleLogin}>Login</button>
        Want to create a new account{" "}
        <Link style={{ color: "blue", textDecoration: "none" }} to="/sign">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Login;

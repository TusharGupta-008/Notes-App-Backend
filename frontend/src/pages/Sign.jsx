import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Sign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/signup`,
        {
          name,
          email,
          password,
        },
      );
      setName("");
      setEmail("");
      setPassword("");
      console.log(response.data);
      setMessage("Signup Successful");
      navigate("/login");
    } catch (error) {
      console.log(error.response);
      console.log(error.response?.data);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Sign Up</h1>
        Name:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        Email:
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        Password:
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <div className="bottom-section">
          <button onClick={handleSignup}>Signup</button>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "blue", textDecoration: "none" }}>
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sign;

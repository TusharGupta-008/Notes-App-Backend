import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Sign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/signup", {
        name,
        email,
        password,
      });
      setName("");
      setEmail("");
      setPassword("");
      console.log(response.data);
      setMessage("Signup Successful");
      navigate("/Login");
    } catch (error) {
      console.log(error.response);
      console.log(error.response?.data);
    }
  };

  return (
    <div className="container">
      <h1>Signup</h1>

      <input value={name} onChange={(e) => setName(e.target.value)} />

      <input value={email} onChange={(e) => setEmail(e.target.value)} />

      <input value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Sign;

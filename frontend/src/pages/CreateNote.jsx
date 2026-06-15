import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleCreate = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:4000/api/notes/create",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(response.data);

      navigate("/dashboard");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="container">
      <h1>Create Note</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />

      <br />

      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />

      <br />

      <button onClick={handleCreate}>Save Note</button>
    </div>
  );
};

export default CreateNote;

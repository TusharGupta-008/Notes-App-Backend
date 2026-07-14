import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const fetchNote = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/notes/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setTitle(response.data.title);
      setDescription(response.data.description);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchNote();
  }, []);

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/notes/update/${id}`,
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
      <h1>Edit Note</h1>

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

      <button onClick={handleCreate}>Update Note</button>
    </div>
  );
};

export default EditNote;

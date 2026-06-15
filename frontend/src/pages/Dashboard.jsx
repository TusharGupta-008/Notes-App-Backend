import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();
  const fetchNotes = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get("http://localhost:4000/api/notes/get", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);

      setNotes(response.data.notes);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`http://localhost:4000/api/notes/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchNotes();
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <button className="create-btn" onClick={() => navigate("/create")}>
        Create Note
      </button>
      <button
        className="logout-btn"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Logout
      </button>
      {notes.map((note) => (
        <div className="note-card" key={note._id}>
          <h2>{note.title}</h2>

          <p>{note.description}</p>

          <button className="delete-btn" onClick={() => handleDelete(note._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const fetchNotes = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/notes/get`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setNotes(response.data.notes);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetchNotes();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/notes/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      fetchNotes();
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) {
    return <h2>Loading...</h2>;
  }

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

      {notes.length === 0 ? (
        <div className="empty-state">
          <h2>No Notes Yet 📝</h2>
          <p>Create your first note by clicking "Create Note".</p>
        </div>
      ) : (
        notes.map((note) => (
          <div className="note-card" key={note._id}>
            <h2>{note.title}</h2>

            <p>{note.description}</p>

            <button
              className="delete-btn"
              onClick={() => {
                if (window.confirm("Delete this note?")) {
                  handleDelete(note._id);
                }
              }}
            >
              Delete
            </button>
            <button
              className="edit-btn"
              onClick={() => navigate(`/edit/${note._id}`)}
            >
              Edit
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;

import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:4000/api/notes",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      setNotes(response.data.notes);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <h1>Dashboard</h1>

      {notes.map((note) => (
        <div key={note._id}>
          <h2>{note.title}</h2>
          <p>{note.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Dashboard;
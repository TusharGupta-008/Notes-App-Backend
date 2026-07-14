import { Route, Routes } from "react-router-dom";

import Sign from "./pages/Sign";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateNote from "./pages/CreateNote";
import Signup from "./pages/Sign";
import EditNote from "./pages/EditNote";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/" element={<Sign />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/edit/:id" element={<EditNote />} />
      </Routes>
    </>
  );
};

export default App;

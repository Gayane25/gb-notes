import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { asyncGetData } from "./redux/notesActions";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import HighPriorityNotes from "./pages/HighPriorityNotes";
import LowPriorityNotes from "./pages/LowPriorityNotes";
import "antd/dist/antd.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncGetData());
  }, []);
  const notes = useSelector((state) => state.notes);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard notes={notes} />} />
        <Route
          path="/highnotes"
          element={<HighPriorityNotes notes={notes} />}
        />
        <Route path="/lownotes" element={<LowPriorityNotes notes={notes} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

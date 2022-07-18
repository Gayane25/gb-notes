import{useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
// import ProtectedRoute from "./ProtectedRoute";
import "antd/dist/antd.css";
import Notes from "./components/Notes";
import Home from "./pages/Home";
import HighNotes from "./components/HighNotes";
import LowNotes from "./components/LowNotes";
import HighPriorityNotes from "./pages/HighPriorityNotes";
import LowPriorityNotes from "./pages/LowPriorityNotes";
import { asyncGetData } from "./redux/AsyncGetData";

function App() {
  const dispatch = useDispatch();
useEffect(()=>{
  dispatch(asyncGetData())
},[])
const notes = useSelector(state=>state.notes)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard notes={notes} />} />
        <Route path="/highnotes" element={<HighPriorityNotes notes={notes}/>} />
        <Route path="/lownotes" element={<LowPriorityNotes notes={notes} />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<ProtectedRoute/>}>
          <Route path="dashboard" element ={<Dashboard/>}/>
        </Route>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/signup" element={<SignUp/>}/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;

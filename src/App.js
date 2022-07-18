
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
// import ProtectedRoute from "./ProtectedRoute";
import 'antd/dist/antd.css';
import Notes from "./components/Notes";
import Home from "./pages/Home";

function App() {
  
 

  return (
    <BrowserRouter>
      <Routes>  
         <Route path="/" element={<Home/>}/>
         <Route path ="/login" element={<Login/>}/>
        <Route path ="/signup" element={<SignUp/>}/>
          <Route path="dashboard" element ={<Dashboard/>}/>
          <Route path="notes" element ={<Notes/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

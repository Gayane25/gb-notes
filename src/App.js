
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import 'antd/dist/antd.css';

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

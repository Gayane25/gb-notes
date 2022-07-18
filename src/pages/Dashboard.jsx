import React, {useEffect} from 'react'
import DashContent from '../components/DashContent';
import DashHeader from '../components/DashHeader';
import {useSelector} from "react-redux";

import {useNavigate} from 'react-router'
import {projectAuth} from "../firebase/firestore";

function Dashboard() {
  const logged = useSelector(state=>state.auth);
  let navigate = useNavigate();


  useEffect(() => {
    if(!Object.keys(logged).length){
      navigate('/login')
    }
  },[logged])

  return  (
    <div>
      <DashHeader />
      <DashContent style={{marginTop:"300px"}}/>
    </div>
  )
}

export default Dashboard;

import React, {useState} from 'react'
import DashContent from '../components/DashContent';
import DashHeader from '../components/DashHeader';
import {useSelector} from "react-redux";
import {projectAuth} from "../firebase/firestore";

function Dashboard() {

  return (
    <div>
      <DashHeader />
      <DashContent style={{marginTop:"300px"}}/>
    </div>
  )
}

export default Dashboard;

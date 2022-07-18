import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {asyncGetData} from "../redux/AsyncGetData";
import DashHeader from './DashHeader';
import DashSider from './DashSider';
import SingleNote from './SingleNote';


function HighNotes() {
    const highnotes = useSelector(state=>state.notes);
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(asyncGetData())
    },[])
  return (
    <div >
        <DashHeader />
        <div style={{display:"flex"}}>
        <DashSider/>
        {highnotes.filter(item=>item.priority==="high").map(note=><SingleNote key={note.id} note={note}/>)}
        </div>
        
    </div>
  )
}

export default HighNotes
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import SingleNote from './SingleNote';
import {asyncGetData} from "../redux/AsyncGetData";
import DashSider from './DashSider';
import DashHeader from './DashHeader';

function LowNotes() {
    const lowPriorityNotes = useSelector(state=>state.notes);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(asyncGetData())
    },[]);
   
  return (
    <>
    <DashHeader />
     <div>
        <DashSider />
        {lowPriorityNotes.filter(note=>note.priority==="low").map(note => <SingleNote key={note.id} note={note}/>)}
    </div>
    </>
   
  )
}

export default LowNotes;
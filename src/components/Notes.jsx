import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {asyncGetData, deleteNote} from "../redux/AsyncGetData"
import SingleNote from './SingleNote';

function Notes() {
    const dispatch = useDispatch();
    const notes = useSelector(state=>state.notes)
    console.log(notes);
    
    useEffect(()=>{
      dispatch(asyncGetData())
       
    },[])

  return (
    <>
        {notes.map((note)=><SingleNote key={note.id} note={note}/>)}
    </>
  
  )
}

export default Notes
import React from 'react';
 import { useState } from 'react';
import { createEditor} from 'slate';
 import { Slate, Editable, withReact } from 'slate-react';
 import 'antd/dist/antd.css';
 import {Button} from 'antd';
import RichText from './RichText';
import { Link } from 'react-router-dom';
import Notes from './Notes';




function DashContent() {

  const [openModal,setOpenModal]= useState(false);
  const handleModalOpen =()=>setOpenModal(!openModal)
   return (
    <>
    <Button style={{backgroundColor:"rgb(37, 150, 190)", color:"FFFFFF"}} size='large' onClick={handleModalOpen} >+</Button>
    {openModal && <RichText openModal={openModal} setOpenModal={setOpenModal}/>}
     
    <Notes/>
    </>
    )
}


export default DashContent;







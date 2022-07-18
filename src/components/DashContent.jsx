import React from 'react';
 import { useState } from 'react';
import { createEditor} from 'slate';
 import { Slate, Editable, withReact } from 'slate-react';
 import 'antd/dist/antd.css';
 import {Button} from 'antd';
import RichText from './RichText';
import { Link } from 'react-router-dom';
import Notes from './Notes';
import DashSider from './DashSider';




function DashContent({openModal, setOpenModal}) {

  
   return (
    <div style={{display:"flex"}}>
    <DashSider openModal={openModal} setOpenModal={setOpenModal}/>
    {openModal && <RichText openModal={openModal} setOpenModal={setOpenModal}/>}
    <Notes/>
    </div>
    )
}


export default DashContent;







import { useState } from 'react';
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';
import {Button} from 'antd';
import { createEditor} from 'slate';
 import { Slate, Editable, withReact } from 'slate-react';

 import logo from "../assets/logo.png"


  
 const initialValue = [
  {
    type: 'paragraph',
    children: [
    {text: 'Click anywhere and just start typing' }, 
    
  ],
  },
  {
    type: 'header',
    children: [
    {text: "Highlighxxxxt any text, and use the menu that pops up to style your  however you like"}, 
    
  ],
  },
  {
    type: 'paragraph',
    children: [
    {text:'Click the + buttons in your sidebar to add new pages'}, 
    
  ],
  }
];

function Home() {
  const [editor] = useState(() => withReact(createEditor()));


  return (
    <div style={{ textAlign:"center"}}>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"100px", paddingBottom:"100px"}}>
        <img src ={logo} alt="my site logo"/>
      </div>
       <Link to ="/login"><Button type = "primary" style={{backgroundColor:"#76b5c5", color:"#FFFFFF", width:"200px", borderRadius:"5px"}}>Get Started</Button></Link>
    <Slate editor={editor} value={initialValue}>
      <Editable style={{fontSize:"21px", padding:"10px"}}/>
    </Slate>
    </div>
  )
}

export default Home
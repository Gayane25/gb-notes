import { useState } from 'react';
import {Link} from "react-router-dom";

import { createEditor} from 'slate';
 import { Slate, Editable, withReact } from 'slate-react';


  
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
    <Slate editor={editor} value={initialValue}>
    <Link to ="/login">Get Started</Link>
      <Editable style={{fontSize:"21px"}}/>
    </Slate>

    
  )
}

export default Home
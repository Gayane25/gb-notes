import React from 'react';
 import { useState } from 'react';
import { createEditor} from 'slate';
 import { Slate, Editable, withReact } from 'slate-react';
 import {Button} from 'antd';

 
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


function DashContent() {
  const [editor] = useState(() => withReact(createEditor()))

   return (
    <>
    <Button type='primary' size='large'>+</Button>
      <Slate editor={editor} value={initialValue}>
        <h2>Get Started</h2>
          <Editable style={{fontSize:"21px"}}/>
        </Slate>
        
    </>
    )
}


export default DashContent;







import React from 'react'

function DashContent() {
  return (
    <div>DashContent</div>
  )
}

export default DashContent;



// import { useState, useCallback } from 'react';
// import { createEditor, Transforms, Editor  } from 'slate'
// import { Slate, Editable, withReact } from 'slate-react'
// import './App.css';

// const initialValue = [
//   {
//   type: 'paragraph',
//   children: [{ text: 'A line of text in a paragraph.' }],
// }
// ];


// function App() {
//   const [editor] = useState(() => withReact(createEditor()))

//   const renderElement = useCallback(props => {
//     switch (props.element.type) {
//       case 'code':
//         return <CodeElement {...props} />
//       default:
//         return <DefaultElement {...props} />
//     }
//   }, [])
//   return <Slate editor={editor} value={initialValue}>
//      <Editable 
//       renderElement={renderElement}
//      onKeyDown={event => {
//        if (event.key === '`' && event.ctrlKey){
//         event.preventDefault();
//         Transforms.setNodes(
//           editor,
//           { type: 'code' },
//           { match: n => Editor.isBlock(editor, n) }
//         )
//        }
//         }}/>
//   </Slate>
// }


// const CodeElement = props => {
//   return (
//     <pre {...props.attributes}>
//       <code>{props.children}</code>
//     </pre>
//   )
// }
// const DefaultElement = props => {
//   return <p {...props.attributes}>{props.children}</p>
// }

// export default App;
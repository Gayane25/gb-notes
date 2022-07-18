import { Button } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { deleteNote } from "../redux/AsyncGetData";

function SingleNote({ note }) {
  const [editor] = useState(() => withReact(createEditor()));
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", justifyContent:"space-between", margin:"5px", padding:"10px", width:"370px", height:"119px", borderRadius:"10px", border: note.priority ==="high" ? "3px solid #58BA6E" : "3px solid #F6CB65", boxShadow: "0px 10px 13px -12px #000000, 5px 5px 15px 5px rgba(0,0,0,0)"}}>
      <Slate
        editor={editor}
        value={[
          {
            type: "paragraph",
            children: [{ text: note.note }],
          },
        ]}
      >
        <Editable style={{ fontSize: "21px", overflow: "auto" }} />
      </Slate>
      <div style={{display:"flex", justifyContent:"space-between"}}>
      
      <span style={{width:"44px", height:"32px", textAlign: "center", borderRadius:"4px", padding:"4px",  backgroundColor:note.priority ==="high" ? "#58BA6E" : "#F6CB65"}}>{note.priority}</span>
      <Button  onClick={() => dispatch(deleteNote(note.id))}>X</Button>
      </div>
      
    </div>
  );
}

export default SingleNote;

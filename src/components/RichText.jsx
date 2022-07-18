import React, { useState, useEffect } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import "antd/dist/antd.css";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { asyncAddNote } from "../redux/AsyncGetData";
import "./RichTextStyles.css";


function RichText({openModal,setOpenModal}) {
  const dispatch = useDispatch();
  const [editor] = useState(() => withReact(createEditor()));
  const [priority, setPriority] = useState("")
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "say something..." }],
    },
  ]);

  const addItem = (note) => {
    let newItem = {
      note,
      priority: priority,
      id: Math.random(),
    };
    setValue([
      {
        type: "paragraph",
        children: [{ text: "" }],
      },
    ]);
    dispatch(asyncAddNote(newItem));
    setOpenModal(false)
  };

  return (
    <div className="modal">
      <div className="modal-content">
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      >
        <Editable style={{ fontSize: "21px", minHeight:"200px"}} />
      </Slate>
      <span>Choose the priority</span>
      <div className="priority-select">
      <span style={{width:"44px", height:"32px", textAlign: "center", borderRadius:"4px", padding:"4px", border:"1px solid #58BA6E", cursor:"pointer"}} onClick={()=>setPriority("high")}>high</span>
      <span style={{width:"44px", height:"32px", textAlign: "center", borderRadius:"4px", padding:"4px", border:"1px solid #F6CB65", cursor:"pointer"}} onClick={()=>setPriority("low")}>low</span>
      </div>
      <Button type="primary" onClick={() => addItem(value[0]["children"][0]["text"])} block>
        Create Note
      </Button>
      <Button block onClick={()=> setOpenModal(false)}>Cancel</Button>
      </div>
    </div>
  );
}

export default RichText;


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { deleteNote } from "../redux/notesActions";
import "./SingleNoteStyles.css";
import "antd/dist/antd.css";
import { Button } from "antd";

function SingleNote({ note }) {
  const [editor] = useState(() => withReact(createEditor()));
  const dispatch = useDispatch();

  return (
    <div
      className="note-content"
      style={{
        border:
          note.priority === "high" ? "3px solid #A0D2E7" : "3px solid #C5C3C0",
        backgroundColor: note.priority === "high" ? "#E3F2F8" : "#F3F3F2",
      }}
    >
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span
          className="priority-choice"
          style={{
            backgroundColor: note.priority === "high" ? "#8FDEEA" : "#8B8681",
          }}
        >
          {note.priority}
        </span>
        <Button onClick={() => dispatch(deleteNote(note.id))}>X</Button>
      </div>
    </div>
  );
}

export default SingleNote;

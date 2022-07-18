import { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncAddNote } from "../redux/notesActions";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import "./RichTextStyles.css";
import "antd/dist/antd.css";
import { Button } from "antd";

function RichText({ setOpenModal }) {
  const dispatch = useDispatch();
  const [editor] = useState(() => withReact(createEditor()));
  const [priority, setPriority] = useState("");
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
    setOpenModal(false);
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
          <Editable style={{ fontSize: "21px", minHeight: "200px" }} />
        </Slate>
        <span>Choose the priority</span>
        <div className="priority-select">
          <span
            className="richtext-priority"
            style={{ border: "1px solid #8FDEEA" }}
            onClick={() => setPriority("high")}
          >
            high
          </span>
          <span
            className="richtext-priority"
            style={{ border: "1px solid #8B8681" }}
            onClick={() => setPriority("low")}
          >
            low
          </span>
        </div>
        <Button
          type="primary"
          onClick={() => addItem(value[0]["children"][0]["text"])}
          block
        >
          Create Note
        </Button>
        <Button block onClick={() => setOpenModal(false)}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default RichText;

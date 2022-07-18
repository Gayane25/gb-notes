import React,{useState} from "react";
import "antd/dist/antd.css";
import RichText from "./RichText";
import Notes from "./Notes";
import DashSider from "./DashSider";
import "./DashboardStyles.css";
import SingleNote from "./SingleNote";

function DashContent({notes}) {
    const [openModal, setOpenModal] = useState(false);
    
  return (
    <div style={{ display: "flex" }}>
      <DashSider openModal={openModal} setOpenModal={setOpenModal} />
      {openModal && (
        <RichText openModal={openModal} setOpenModal={setOpenModal} />
      )}
      <div className="notes-content">
      {notes.map((note)=><SingleNote key={note.id} note={note}/>)}
      </div>
    </div>
  );
}

export default DashContent;

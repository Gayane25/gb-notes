import {useState} from "react";
import DashSider from "./DashSider";
import RichText from "./RichText";
import SingleNote from "./SingleNote";
import "./DashboardStyles.css";


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

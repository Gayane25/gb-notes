import React from 'react'

function HighAndLow({priority, setPriority}) {

    let spanStyle = {
        padding:"5px",
        border: "1px solid grey",
        borderRadius:"3px",
        fontSize: "16px",
        backgroundColor: priority==="high"? "green" : "yellow",
    }
  return (
    <div style={{display:"flex", justifyContent :"space-between", width:"100px"}}>
        <span style={spanStyle} onClick={(priority)=>setPriority("high")}>High</span>
        <span  style={spanStyle} onClick={(priority)=>setPriority("low")}>Low</span>
    </div>
  )
}

export default HighAndLow
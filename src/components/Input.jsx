import React from 'react'

function Input({value, onChange, name}) {
  return <input type={name} value={value} onChange={onChange}/>
}

export default Input;
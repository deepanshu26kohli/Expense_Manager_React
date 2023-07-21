import React, { useState } from 'react'
import "../Style/HeaderModal.css"
const HeaderModal = (props) => {
  const [header,setHeader] = useState("")
  const [allHeaders,setAllheaders] = useState([])
  const handleHeader = (event)=>{
    event.preventDefault()
    if (header.length)
    {
    let newHeader = {header:header}
    setAllheaders([...allHeaders,newHeader])
    setHeader("")
    console.log(header)
    console.log(allHeaders)
    alert("Header Added Successfully")
  }
  else{
    alert("Please Enter Header")
  }

  }
  return (
    <div className='head-modal'>
      <div className='head-form'>
           <button className='head-close' onClick={()=>{props.setHeadModal(false)}}>X</button>
            <form type="action" onSubmit={handleHeader}>
            <label >Header Name</label>
            <input placeholder="Enter Name"type = "text" className='head-inp' value={header} onChange={(event) =>{setHeader(event.target.value)}} />
            <button className='submit-head-btn'  type="submit">Submit </button>
            </form>
      </div>
    </div>
  )
}

export default HeaderModal

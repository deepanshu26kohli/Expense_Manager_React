import React, { useState,useEffect } from 'react'
import "../Style/HeaderModal.css"
const HeaderModal = (props) => {
  // jfyjmfyjmfj
  
  const [header,setHeader] = useState("")
  const [allHeaders,setAllHeaders] = useState([])

  const handleHeader = (event)=>{
    event.preventDefault()
    if (header.length)
    {
    let newHeader = {header:header,id:new Date().getTime()}
    // console.log(newHeader)
    setAllHeaders([...allHeaders,newHeader])

    //  console.log(allHeaders)
   
       alert("Header Added Successfully")
    console.log(header)
    setHeader("") 
    
  }
  else{
    alert("Please Enter Header")
  }

  }

  useEffect(()=>{
    if (allHeaders.length){
      props.setMyheaders(allHeaders)
      }
  },[allHeaders])
  return (
    <div className='head-modal'>
      <div className='head-form'>
           <button className='head-close' onClick={()=>{props.setHeadModal(false)}}>X</button>
            <form  onSubmit={handleHeader}>
            <label >Header Name</label>
            <input placeholder="Enter Name"type = "text" className='head-inp' value={header} onChange={(event) =>{setHeader(event.target.value)}} />
            <button className='submit-head-btn'  type="submit">Submit </button>
            </form>
      </div>
    </div>
  )
}

export default HeaderModal



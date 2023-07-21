import React, { useState } from 'react'
import "../Style/HeaderModal.css"
const HeaderModal = (props) => {
  const [headers,setHeaders] = useState([])
  return (
    <div className='head-modal'>
      <div className='head-form'>
           <button className='head-close' onClick={()=>{props.setHeadModal(false)}}>X</button>
            <form type="action">
            <label >Header Name</label>
            <input placeholder="Enter Name"type = "text" className='head-inp' />
            <button className='submit-head-btn' type="submit">Submit </button>
            </form>
      </div>
    </div>
  )
}

export default HeaderModal
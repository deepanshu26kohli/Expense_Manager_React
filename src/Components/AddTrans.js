import React from 'react'
import "../Style/AddTrans.css"
const AddTrans = (props) => {
  
  return (
    <div className='addTrans'>
      <h3>Add Transaction</h3>
      <label>Header<button className="plusbtn"  onClick={()=>{props.setHeadModal(true)}}>Add New Header</button></label>
      {/* <button>+</button> */}
      <select>
      <option value="Salary">Salary</option>
      <option value="Person">Person</option>
      <option value="Salary">Salary</option>
      <option value="Salary">Salary</option>
      <option value="Salary">Salary</option>
      </select>
      <label>Amount</label>
      <input type='text'/>
      <label>Type</label>
      <select>
      <option value="Income">Income</option>
      <option value="Income">Income</option>
      <option value="Income">Income</option>
      <option value="Income">Income</option>
      <option value="Income">Income</option>
      </select>
      <input type='date' className='date'/>
      <button>Add Transaction</button>
    </div>
  )
}

export default AddTrans

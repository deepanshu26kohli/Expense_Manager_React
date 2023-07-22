import React, { useEffect, useState } from 'react'
import "../Style/AddTrans.css"

const AddTrans = (props) => {
  
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState("")
    const [transHeader, setTransHeader] = useState("")
    const [date, setDate] = useState("")
    const [alltrans, setAllTrans] = useState([])
    const transHandle = (e) => {
      e.preventDefault()
      const newTrans = { amount: amount, type: type, transHeader: transHeader, date: date , id : new Date().getTime() }
      setAllTrans([...alltrans,newTrans])
      console.log(newTrans)
    }
    useEffect(() => {
      props.setMyheaders(props.myHeaders)
      setAllTrans(alltrans)
      props.setMyAlltrans(alltrans)
      // console.log(alltrans,"All Transactions")
    },)
 
  return (
    <form className='addTrans' onSubmit={transHandle}>
      <h3>Add Transaction</h3>
      <label>Header<button className="plusbtn" onClick={() => { props.setHeadModal(true) }}>Add New Header</button></label>
      <select value={transHeader} onChange={ (e)=>{setTransHeader(e.target.value)} }>
      <option value="">Select Header</option>
        {
          props.myHeaders.map((e) => {
            return <option key={e.id} value={e.header}>{e.header}</option>

          })
        }
      </select>
      <label>Amount</label>
      <input type='number' value={amount} onChange={(event) => { setAmount(event.target.value) }} />
      <label>Type</label>
      <select value={type} onChange={(e) => { setType(e.target.value) }}>
        <option value="">Select Type</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
        <option value="Purchase">Purchase</option>
        <option value="Sale">Sale</option>
        <option value="Investment">Investment</option>
      </select>
      <input type='date' className='date' value={date} onChange={(event) => { setDate(event.target.value) }} />
      <button type='submit'>Add Transaction</button>
    </form>
  )
}

export default AddTrans

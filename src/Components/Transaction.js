import React from 'react'
import AddTrans from './AddTrans'
import TransHistory from './TransHistory'
import "../Style/Transaction.css"

const Transaction = (props) => {
  return (
    <div className='transaction'>
      <AddTrans  myHeaders={props.myHeaders} setMyheaders={props.setMyheaders} setHeadModal = {props.setHeadModal} headModal = {props.headModal}/>
      <TransHistory/>
    </div>
  )
}

export default Transaction

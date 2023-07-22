import React from 'react'
import AddTrans from './AddTrans'
import TransHistory from './TransHistory'
import "../Style/Transaction.css"

const Transaction = (props) => {
  return (
    <div className='transaction'>
      <AddTrans myAllTrans={props.myAllTrans} setMyAlltrans={props.setMyAlltrans}  myHeaders={props.myHeaders} setMyheaders={props.setMyheaders} setHeadModal = {props.setHeadModal} headModal = {props.headModal}/>
      <TransHistory myAllTrans={props.myAllTrans} setMyAlltrans={props.setMyAlltrans}/>
    </div>
  )
}

export default Transaction

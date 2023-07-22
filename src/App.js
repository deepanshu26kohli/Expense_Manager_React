import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Money from './Components/Money'
import Transaction from './Components/Transaction'
import HeaderModal from './Components/HeaderModal'

const App = () => {
  const [headModal,SetHeadModal] = useState(false)
  const [myHeaders,setMyheaders] = useState([])
  const [myAllTrans,setMyAlltrans] = useState([])
  useEffect(()=>{
    // console.log(myHeaders,"app")
    // console.log(myAllTrans,"app")
  })
  return (
    <>
      <Header/>
      <Money/>
      <Transaction myAllTrans={myAllTrans} setMyAlltrans={setMyAlltrans} myHeaders={myHeaders} setMyheaders={setMyheaders} setHeadModal = {SetHeadModal} headModal = {headModal}/>
      { headModal && <HeaderModal myHeaders={myHeaders} setMyheaders={setMyheaders} setHeadModal = {SetHeadModal} headModal = {headModal}/>}
    </>
  )
}

export default App

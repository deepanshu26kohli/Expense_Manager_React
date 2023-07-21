import React, { useState } from 'react'
import Header from './Components/Header'
import Money from './Components/Money'
import Transaction from './Components/Transaction'
import HeaderModal from './Components/HeaderModal'

const App = () => {
  const [headModal,SetHeadModal] = useState(false)
  return (
    <>
      <Header/>
      <Money/>
      <Transaction setHeadModal = {SetHeadModal} headModal = {headModal}/>
      { headModal && <HeaderModal setHeadModal = {SetHeadModal} headModal = {headModal}/>}
    </>
  )
}

export default App

import React from 'react'
import { FaRupeeSign } from 'react-icons/fa';
import { BiArrowFromBottom } from "react-icons/bi";
import { BiArrowFromTop } from "react-icons/bi";
import "../Style/Money.css"
const Money = () => {
    return (
        <div className='main'>
            <div className='balance box'>
                <h2>My Balance</h2>
                <h2>Rs 50</h2>
                <h1><FaRupeeSign/></h1>
            </div>
            <div className='income box'>
                <h2>My Income</h2>
                <h2>Rs 20</h2>
                <h1><BiArrowFromBottom/></h1>
            </div>
            <div className='expense box'>
                <h2>My Expenses</h2>
                <h2>Rs 10</h2>
                <h1><BiArrowFromTop/></h1>
            </div>
        </div>
    )
}

export default Money

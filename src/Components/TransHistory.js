import React, { useEffect } from 'react'
import "../Style/TransHistory.css"
const TransHistory = (props) => {
    useEffect(()=>{
        console.log(props.myAllTrans,"history")
        
    },[props.myAllTrans])
    
    return (
        <div className='transHistory'>
            <h3>History</h3>
            <table>
                <tbody>
                <tr>
                    <th>Header</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Date</th>
                </tr>
                {
                    props.myAllTrans.map((e)=>{
                       
                        return <tr key={e.id}><td>{e.transHeader}</td><td>{e.amount}</td><td>{e.type}</td><td>{e.date}</td><td>❌</td>
                        </tr>
                    })
                }
                
                {/* <tr><td>Salary</td><td>20</td><td>Income</td><td>xyz</td><td>❌</td>
                </tr>
                <tr><td>Salary</td><td>20</td><td>Income</td><td>xyz</td><td>❌</td>
                </tr>
                <tr><td>Salary</td><td>20</td><td>Income</td><td>xyz</td><td>❌</td>
                </tr>
                <tr><td>Salary</td><td>20</td><td>Income</td><td>xyz</td><td>❌</td>
                </tr>
                <tr><td>Salary</td><td>20</td><td>Income</td><td>xyz</td><td>❌</td>
                </tr>
                <tr><td>Salary</td><td>20</td><td>Income</td><td>xyz</td><td>❌</td>
                </tr>
                <tr><td>Salary</td><td>20</td><td>Income</td><td>xyz</td><td>❌</td>
                </tr>
                <tr><td>Salary</td><td>20</td><td>Income</td><td>xyz</td><td>❌</td>
                </tr>
                <tr><td>Salary</td><td>20</td><td>Income</td><td>xyz</td><td>❌</td>
                </tr> */}
                </tbody>
            </table>
           
        </div>
    )
}

export default TransHistory

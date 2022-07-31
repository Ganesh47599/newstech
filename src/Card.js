import React from 'react'
import { useNavigate } from 'react-router-dom'
import './inventory.css'
function Card(props) {
    const navigate=useNavigate();
  return (
    <>
<div className='card'>
    <h2>{props.title1}</h2>
    <img src={props.img1} alt="" className='inventoryImg'/>
    <p>{props.spec1}</p>
    <p>{props.display1}</p>
    <p>{props.battery1}</p>
    <p>{props.resistan1}</p>
    <h2>{props.price1}</h2>
    <button onClick={()=> navigate('/Readmore')} className='readmore'>Read More</button>
</div>

    </>
    
  )
}

export default Card
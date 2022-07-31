import React from 'react'
import Card from './Card'
import Data from './Data'
import './inventory.css'
function Inventory() {
  return (
    <>
    <h1>Our Inventory
    </h1>
  <div className='inventory'>
{Data.map((values)=>{
  return (
    <Card title1={values.Stitle} 
    img1={values.imgSrc}
      spec1={values.specs}
      display1={values.display}
      battery1={values.battery}
      resistan1={values.resistant}
      price1={values.price}
    />
  )
})}
  </div>

    </>
  
  )
}

export default Inventory
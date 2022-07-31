import React from 'react'
import Readmoredata from './readmoredata'
import Readmorecrad from './readmorecradI'

function  ReadmoreI() {
  return (
    <div className='cont'>
{Readmoredata.map((values)=>{
  return (
    <Readmorecrad mobile1={values.moble2}
    display1={values.display2}
    
    />

  )
})}
    
    </div>
  )
}

export default ReadmoreI
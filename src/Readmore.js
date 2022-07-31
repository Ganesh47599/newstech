import React from 'react'
import readmoredata from './readmoredata'
import Readcrad from './readcrad'

function Readmore() {
  return (
    <div className='cont'>
{readmoredata.map((values)=>{
  return (
    <Readcrad mobile1={values.moble1}
    display1={values.display1}
      size1={values.size1}
      resolution={values.resolution1}
      Processor1={values.Processor1}
      internal1={values.Internal1}
      maincamera1={values.MainCamera1}
      
    />

  )
})}
    
    </div>
  )
}

export default Readmore
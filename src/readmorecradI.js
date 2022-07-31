import React from 'react'
import './Readmore.css'

function Readmorecrad(props) {
  return (
  <>
           <div className='readmo'>
    <h1>Iphone 13 pro</h1>
   
    <p><strong>Display: </strong> </p>
    <p><strong>Size:</strong>{props.size1}</p>  
    <p><strong>Resolution:</strong>	{props.resolution}</p>
      <p><strong>Processor : </strong>{props.Processor1} </p>
      <p><strong>Internal:</strong>	{props.internal1}</p>
      <p><strong>Main camera : </strong>{props.maincamera1}</p>
  <p><strong>Selfie Camera:  </strong> 16MP</p>
  <p> <strong>fast charging :  </strong>120W, 100% in 19 min</p>
<p><strong>Features: </strong> Fingerprint (under display, optical), accelerometer, gyro, proximity, compass</p>
<p><strong>Network:</strong>HSPA 42.2/5.76 Mbps, LTE-A, 5G</p>
<p><strong>SIM :</strong>	Dual SIM (Nano-SIM, dual stand-by)</p>

    </div>
   <div className='imgConta'>
   <img src="https://tse2.mm.bing.net/th?id=OIP.qnvcJk3kHR8BirwLYUYTkAHaEK&pid=Api&P=0" alt=""/>
    
   </div>
  </>
  )
}

export default Readmorecrad
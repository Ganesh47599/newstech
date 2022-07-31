import React from 'react'
import './Readmore.css'
import logo from './iQOO-9t.png'
function Readcrad(props) {
  return (
  <>
           <div className='readmo'>
    <h1>{props.mobile1}</h1>
    <p><strong>Display: </strong>{props.display1}</p>
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
    <img src={logo} alt=""/>
    
   </div>
  </>
  )
}

export default Readcrad
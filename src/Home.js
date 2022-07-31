import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from './vivo-iqoo-9.jpg'
import  './HomeAbout.css'
function Home() {
  const navigate=useNavigate();
  return (
  <>
  <div className="mainSection">
    <div className="contentBox">
      <h1>Iqoo 9T</h1>
      <h3>Display: AMOLED, 1B colors, 120hz</h3>
      <p>Processor : SnapDragon 8+ Gen 1(4nm)</p>
      <p>Main camera : 50MP, 13MP ,12MP</p>
  <p>Selfie Camera: 16MP</p>
  <p> fast charging : 120W, 100% in 19 min</p>
  <div className='btnBox'>
    <div className='btn'>
      <button onClick={()=> navigate('/Readmore')} className='readmore'>Read More</button>
    </div>
  </div>
    </div>
    <div className='imgContainer'>
      <img src={logo} alt=""/>
    </div>
    <div className="contentBox">
      <h1>Iphone 13pro</h1>
      <h3>Display: AMOLED, 1B colors, 120hz</h3>
      <p>Processor : SnapDragon 8+ Gen 1(4nm)</p>
      <p>Main camera : 50MP, 13MP ,12MP</p>
  <p>Selfie Camera: 16MP</p>
  <p> fast charging : 120W, 100% in 19 min</p>
  <div className='btnBox'>
    <div className='btn'>
      <button onClick={()=> navigate('/ReadmoreI')} className='readmore'>Read More</button>
    </div>
  </div>
    </div>
    <div className='imgContainer'>
      <img src={logo} alt=""/>
    </div>
  </div>
  </>
  )
}

export default Home
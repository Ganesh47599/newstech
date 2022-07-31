import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import download from './download.jpg'
import './About.css'
function About() {
  return (
    <div className='about'>
<div className='aboutCo'>
  <h1>Hi welcome to our newstech site</h1>
  <p>We are doing daily updates on technews </p>
  <p>we are from Andhra Pradesh. if you need any thing help contact us on any particular</p>
    <h3>help us via phone pay to this number : 9177956175</h3>
    <p>jAJJIJAioxasx IA Dud si sxj idu wd fw ifeo f9o op riwu diopowi doqiwdoiqw dopdqodi d9p d de dqj ijqiuwi dndas kdjsodu odi dh hqdd ,kd hdiouoqiiod qdihduidui qd u</p>

    <YouTubeIcon className='iconss'/>
</div>



<div className='profile'>
  <img src={download} alt=""/>
  <h3>Elon musk</h3>
  <h3>08-05-2000</h3>
</div>
    </div>
  )
}

export default About
import React from 'react'
import './Footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import {useNavigate} from 'react-router-dom'
function Footer() {
  const navigate=useNavigate();
  return (
 <>
  <footer>
    <div className='containerX container-flex'>
      <div className='icons'>
<TwitterIcon className='icon'/>
<InstagramIcon className='icon'/>
<FacebookIcon className='icon'/>
      </div> 
      <div className="line">
      <button onClick={()=> navigate('/staff')} className='lineR'>Our staff</button>
      </div>
      <div className='copyright'>
        <p>All rights are reserved</p>
        <p>Made with love by Ganesh</p>
      </div>
          </div>
  </footer>
 </>
  )
}

export default Footer
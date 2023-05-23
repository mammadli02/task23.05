import React from 'react'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <header  >
    
    
   <section style={{backgroundImage:'URL(https://preview.colorlib.com/theme/robotics/img/banner-bg.jpg.webp)',  padding:"150px 150px" }}>
    
    
{/* <div style={{display:'flex', justifyContent:'space-between',width:"90%"  }}>
<div>
    <img src="https://preview.colorlib.com/theme/robotics/img/logo.png.webp" alt="" />
</div>

<div>
    <ul style={{display:'flex', listStyle:'none',}}>
        <li ><Link to='/models' style={{textDecoration:'none', color: 'white', marginRight:'20px', alignItems:'center',
    fontWeight: '400',
    fontSize: '22px'}}>Home</Link></li>
        <li><Link to='/add-model' style={{textDecoration:'none', color: 'white',fontWeight: '400',
    fontSize: '22px'}}>Add</Link></li>
    </ul>
</div>
</div> */}

<div style={{display:'flex',justifyContent:'space-between', height:'50vh', alignItems:'center',width:"90%" }}>
<div style={{width:'50%' }}>
    <h1 style={{fontSize: '60px',color: '#fff'}}>
    Improved
Production level
with Robotics
    </h1>
    <p style={{marginBottom: '20px',
    marginTop: '5px',color: '#fff',fontSize: '14px',
    fontWeight: '300',
    lineheight: '1.625em'}}>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</p>
    <a style={{padding: '10px',background: '#fff',
    color: '#222'}}>VIEW DETAILS</a>
</div>
<div style={{width:'50%'}}>
<img style={{width:'100%'}}
src="https://preview.colorlib.com/theme/robotics/img/banner-img.png.webp" alt="" />
</div>
</div>


    </section>




    </header>
  )
}

export default Navbar2

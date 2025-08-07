import React from 'react'

const Navbar = () => {
  return (
    <>

   <div className="container nav_bar" 
    data-aos="fade-dwon"
    data-aos-duration="1000">
     <div className="left nav_items">Portfolio</div>
     <div className="right">
      <a href="" className="nav_items">Home</a>
      <a href="" className="nav_items">Experience </a>
      <a href="" className="nav_items">Skill</a>
      <a href="" className="nav_items">Project</a>
      <a href="" className="nav_items">Contact</a>
     </div>
   </div>
    </>
  )
}

export default Navbar

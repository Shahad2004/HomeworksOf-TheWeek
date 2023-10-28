import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    
    <div className="d-flex  flex-row align-items-center p-3 
    px-4 mb-3 bg-white border-bottom border-primary">
  <h5 className="my-0  font-weight-normal">Company name</h5>
  <nav className="my-2  mr-3 ms-auto">
  <Link to="/" className="p-2 text-dark" >Features</Link>
  <Link to="/support" className="p-2 text-dark" >Support</Link>
  <Link to="/pricing" className="p-2 text-dark" >Pricing</Link>
  <Link to="/counter" className="p-2 text-dark" >Counter H.W</Link>
  <Link to="/listH.W" className="p-2 text-dark" >List H.W</Link>
  <Link to="/paragraphH.W" className="p-2 text-dark" >Paragraph H.W</Link>
  <Link to="/checkBoxH.W" className="p-2 text-dark" >CheckBox H.W</Link>
  </nav>
  <a className="btn btn-outline-primary" href="#">Sign up</a>
</div>
  )
}

export default NavBar
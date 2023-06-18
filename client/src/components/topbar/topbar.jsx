import React from 'react'
import './topbar.css'
import { Link } from 'react-router-dom';

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>

      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/" style={{textDecoration: "none", color:"inherit"}}>HOME</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/" style={{textDecoration: "none", color:"inherit"}}>ABOUT</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/" style={{textDecoration: "none", color:"inherit"}}>CONTACT</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/write" style={{textDecoration: "none", color:"inherit"}}>WRITE</Link>
          </li>
          <li className="topListItem"> 
            {user && "LOGOUT"}
          </li>

        </ul>
      </div>
      <div className="topRight">
      {
        user ? (<img className="topImg" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />):
        (
          
        <ul className='topList'>
        <li className='topListItem'>

          <Link className='link' to='/login' style={{textDecoration: "none", color:"inherit"}}> LOGIN </Link>
        </li>
        <li className='topListItem'>

          <Link className='link' to='/register' style={{textDecoration: "none", color:"inherit"}}> REGISTER </Link>
        </li>
          </ul>
        )
      }
        
        <i className="topSearchIcon fas fa-search"></i>
      </div>

    </div>
  )
}

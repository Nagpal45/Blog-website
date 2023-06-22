import React, { useContext } from 'react'
import './topbar.css'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function Topbar() {
  const PF = "http://localhost:5000/images/"
  const {user,dispatch} = useContext(Context)

  const handleLogout = () => {
    dispatch({type:"LOGOUT"});
  };

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
          <li className="topListItem" onClick={handleLogout}> 
            {user && "LOGOUT"}
          </li>

        </ul>
      </div>
      <div className="topRight">
      {

        user ? (
        <Link to='/settings'>  
          <img className="topImg" src={PF + user.profilePic} alt="" />
        </Link>
        
        ):
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

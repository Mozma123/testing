
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({ user, handleLogout }) { 
  const navigate = useNavigate();

  console.log("Navbar rendered"); 
  return (
    <nav>
      <ul>
        <li onClick={() => navigate('/')}>Home</li>
        <li  style={{  marginLeft: '80px' }}  onClick={() => navigate('/about')} >About</li>
        <li onClick={() => navigate('/contact')}   style={{  marginLeft: '80px' }} >Contact</li>
        <li onClick={() => navigate('/post')}style={{  marginLeft: '80px' }} > Create Post</li>
        <li onClick={() => navigate('/login')}   style={{  marginLeft: '80px' }} >Login</li>
        {user && (
         <li style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}> 
         <img
           src={user.photoURL} // Use the user's photoURL
           alt="User Profile"
           className="Profile-image" 
           style={{ width: '30px', height: '30px', marginRight: '10px', marginLeft: '-450px',  marginTop: '-30px' }} 
         />
         <span style={{ marginTop: '0', marginTop: '-30px' }} className='name4'>{user.displayName}</span> 
       </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./index.css"

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='divcontainer'>
      <button onClick={() => navigate('/')} className='nav-container'>Phani Home</button>
      <nav>
        <Link to="/aphani"><button className='nav-container'>aphani</button></Link>  
        <Link to="/apphani"><button className='nav-container'>apphani</button></Link>
      </nav>
    </header>
  );
};

export default Header;

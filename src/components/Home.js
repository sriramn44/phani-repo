import React from 'react';
import { Link } from 'react-router-dom';

import "./Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the phani p*********</h1>
      <nav>
        <ul className='sub-container'>
          <li><Link to="/aphani"><button type="button" class="job-button">if phani is arip*** click here</button></Link></li>
          <li><Link to="/apphani"><button type="button" class="job-button">if phani is konda ari p*** click here</button></Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
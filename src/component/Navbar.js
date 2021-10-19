import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Style';

const Navbar = () => {
  return (
    <Header>
      {/* navabar needs a style */}
      <div className='logo'>
        <Link to='/'>
          <h1>CocktailMaster</h1>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/random'>Random Drink</Link>
          </li>
          <li>
            <Link to='/search'>Search Drink</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default Navbar;

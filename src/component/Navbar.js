import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo-container'>
        <h2>CocktailMaker</h2>
      </div>
      <ul className='nav-items'>
        <li>
          <a href='/' className='nav-link'>
            Search Drink By Name
          </a>
        </li>
        <li>
          <a href='/' className='nav-link'>
            Search Drink By Ingredients
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

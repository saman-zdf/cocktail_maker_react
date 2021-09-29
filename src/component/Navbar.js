import React from 'react';

const Navbar = () => {
  const navbar = {
    height: '60px',
    backgroundColor: '#1c68ff',
    color: '#fff',
    padding: "20px",
    textAlign: 'center',
  };
  return (
    <nav style={navbar}>
      <h1>CocktailMaker</h1>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const RandomDrink = () => {
  const [randomDrink, setRandomDrink] = useState([]);
  const [display, setDisplay] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRandomDrink = async () => {
    let response = await fetch(url);
    let drink = await response.json();
    setRandomDrink(drink.drinks);
  };

  // console.log(randomDrink);

  useEffect(() => {
    fetchRandomDrink();
    setLoading(false);
  }, [display]);

  const handleClick = () => {
    setDisplay(randomDrink);
  };

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className='btn-container'>
            <button className='random-drink-btn' onClick={handleClick}>
              GetDrink
            </button>
          </div>
          <div className='drink-container'>
            <div className='drink-content'>
              {display.map((item) => {
                return (
                  <>
                    <div className='drink-info'>
                      <h2>{item.strDrink}</h2>
                      <h3>Ingredients: </h3>
                      <ul>
                        <li>{item.strIngredient1 && item.strIngredient1}</li>
                        <li>{item.strIngredient2 && item.strIngredient2}</li>
                        <li>{item.strIngredient3 && item.strIngredient3}</li>
                        <li>{item.strIngredient4 && item.strIngredient4}</li>
                        <li>{item.strIngredient5 && item.strIngredient5}</li>
                        <li>{item.strIngredient6 && item.strIngredient6}</li>
                        <li>{item.strIngredient7 && item.strIngredient7}</li>
                      </ul>
                      <h4>Instruction:</h4>
                      <p>{item.strInstructions}</p>
                    </div>
                    <div className='drink-image'>
                      <img
                        src={item.strDrinkThumb}
                        alt={item.strDrinks}
                        className='img'
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RandomDrink;

import React, { useState, useEffect } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const RandomDrink = () => {
  const [randomDrink, setRandomDrink] = useState([]);
  const [display, setDisplay] = useState([]);

  const fetchRandomDrink = async () => {
    let response = await fetch(url);
    let drink = await response.json();
    setRandomDrink(drink.drinks);
  };

  // console.log(randomDrink);

  useEffect(() => {
    fetchRandomDrink();
  }, [display]);

  const handleClick = () => {
    setDisplay(randomDrink);
  };

  return (
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
                  <div className='underline'></div>
                  <h3>Ingredients: </h3>
                  <p>{item.strIngredient1 && item.strIngredient1}</p>
                  <p>{item.strIngredient2 && item.strIngredient2}</p>
                  <p>{item.strIngredient3 && item.strIngredient3}</p>
                  <p>{item.strIngredient4 && item.strIngredient4}</p>
                  <p>{item.strIngredient5 && item.strIngredient5}</p>
                  <p>{item.strIngredient6 && item.strIngredient6}</p>
                  <p>{item.strIngredient7 && item.strIngredient7}</p>
                  <h3>Instruction:</h3>
                  <p className='instruction'>{item.strInstructions}</p>
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
  );
};

export default RandomDrink;

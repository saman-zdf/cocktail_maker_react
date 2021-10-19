import react, { useState, useEffect } from 'react';

const SearchDrink = () => {
  const [input, setInput] = useState('');
  const [drink, setDrink] = useState([]);

  const fetchDrink = async () => {
    let response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
    );
    let drink = await response.json();
    setDrink(drink.drinks[0]);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchDrink();
    }, 1000);
  }, [input]);

  // handling the the user input and set it to the input state
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(input);
  };

  return (
    <>
      <div className='form-container'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type='text'
            placeholder='Search Drink by Name'
            value={input}
            onChange={handleInput}
          />
          <input type='submit' value='search' />
        </form>
      </div>
      <div className='drink-container'>
        <div className='drink-content'>
          {drink && (
            <>
              <div className='drink-info'>
                <h2>{drink.strDrink}</h2>
                <div className='underline'></div>
                <h3>Ingredients: </h3>
                <p>{drink.strIngredient1 && drink.strIngredient1}</p>
                <p>{drink.strIngredient2 && drink.strIngredient2}</p>
                <p>{drink.strIngredient3 && drink.strIngredient3}</p>
                <p>{drink.strIngredient4 && drink.strIngredient4}</p>
                <p>{drink.strIngredient5 && drink.strIngredient5}</p>
                <p>{drink.strIngredient6 && drink.strIngredient6}</p>
                <p>{drink.strIngredient7 && drink.strIngredient7}</p>
                <h3>Instruction:</h3>
                <p className='instruction'>{drink.strInstructions}</p>
              </div>
              <div className='drink-image'>
                <img
                  src={drink.strDrinkThumb}
                  alt={drink.strDrinks}
                  className='img'
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchDrink;

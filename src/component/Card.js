import React from 'react';
// import Wrapper from './Wrapper';
import { CardDiv } from './Style';

const Card = ({ drinks }) => {
  return (
    <>
      {drinks.map((drink) => {
        return (
          <CardDiv key={drink.idDrink}>
            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
              style={{ width: '100%', display: 'block' }}
            />
            <h3>{drink.strDrink}</h3>
            <p>
              <span>
                Instruction: <br />
              </span>
              {drink.strInstructions}
            </p>
          </CardDiv>
        );
      })}
    </>
  );
};

export default Card;

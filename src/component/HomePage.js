import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Card from './Card';
import { Wrapper, Heading2, Button } from './Style';
const HomePage = () => {
  // Create an array of alphabet
  const alpha = Array.from(Array(26)).map((e, i) => i + 97);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  const [drinks, setDrinks] = useState([]);
  const [letters, setLetters] = useState(alphabet);
  const [letter, setLetter] = useState('');

  async function fetchDrinks() {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
    );
    const allDrinks = await res.json();
    setDrinks(allDrinks.drinks);
  }
  useEffect(() => {
    if (letter) {
      fetchDrinks();
    }
    // useEffect dependency is the letter, which every time th click happen on the specifi letter it first update the value of letter and then it re-render the useEffect again
  }, [letter]);
  // get the single letter from array of letters with this function
  const handleLetter = (l) => {
    updateState();
    setLetter(l);
  };
  //  set letter to empty string
  const updateState = () => {
    setLetter('');
    setDrinks([]);
  };

  return (
    <>
      <Hero />
      <Heading2>Search Cocktail by first Letter</Heading2>
      <Wrapper>
        {letters.map((l, idx) => {
          return (
            <Button key={idx} onClick={() => handleLetter(l)}>
              {l}
            </Button>
          );
        })}
      </Wrapper>
      <Wrapper>{letter && <Card drinks={drinks} />}</Wrapper>
    </>
  );
};

export default HomePage;

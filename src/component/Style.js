import styled from 'styled-components';

export const Header = styled.header`
  background: #1c68ff;
  height: 60px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const CardDiv = styled.div`
  width: 300px;
  height: 430px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin: 1em;
  padding: 0.5em;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #999;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #e9e9e9;
  }
`;

export const Heading2 = styled.h2`
  text-align: center;
  font-size: 40px;
  color: #1c68ff;
  margin: 2rem auto;
  padding-bottom: 1rem;
  border-bottom: 2px solid #1c68ff;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 40px;
  font-family: inherit;
  color: #1c68ff;
  margin: 1rem;
`;

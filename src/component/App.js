import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import RandomDrink from './RandomDrink';
import SearchDrink from './SearchDrink';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/random'>
          <RandomDrink />
        </Route>
        <Route path='/search'>
          <SearchDrink />
        </Route>
      </Switch>
    </>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component';
import HomePage from './component/Pages/HomePage';
import Screen2 from './component/Pages/Screen2';
import wishlist from './component/Pages/wishlist';
import ProductCard from '../src/component/Pages/product/productCard'

const App = () => {
  return (
    <Router>
      <Header />
      <br/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/cart" component={Screen2} />
        <Route path="/wishlist" component={wishlist} />
         <Route path="/productCard" component={ProductCard} />
        {/*<Route path="/route2" component={Route2} /> */}
      </Switch>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component';
import wishlist from './component/Pages/wishlist';
import Mycart from './component/Pages/Mycart';
import HomePage from './component/Pages/Home/HomePage';
import ProductCard from './component/Pages/product/productCard';
import Arrivals from './component/Pages/Home/Arrivals'
import GlobalResult from './component/Pages/common/GlobalResult';

const App = () => {
  return (
    <Router>
      <Header />
      <br/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/cart" component={Mycart} />
        <Route path="/wishlist" component={wishlist} />
         <Route path="/productCard" component={ProductCard} />
         <Route path="/arrivals" component={Arrivals} />
         <Route path="/GlobalResult" component={GlobalResult} />
        {/*<Route path="/route2" component={Route2} /> */}
      </Switch>
    </Router>
  );
};

export default App;

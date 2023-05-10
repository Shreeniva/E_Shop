import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component';
import HomePage from './component/Pages/HomePage';
import Screen2 from './component/Pages/Screen2';
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
         <Route path="/cart" component={Screen2} />
        {/*<Route path="/route2" component={Route2} /> */}
      </Switch>
    </Router>
  );
};

export default App;

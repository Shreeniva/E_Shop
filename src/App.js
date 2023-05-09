import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component';
import Screen1 from './component/Pages/Screen1';
import Screen2 from './component/Pages/Screen2';
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Screen1} />
         <Route path="/route1" component={Screen2} />
        {/*<Route path="/route2" component={Route2} /> */}
      </Switch>
    </Router>
  );
};

export default App;

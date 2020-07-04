import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Bookings from 'highflyer/src/pages/Bookings';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/bookings' component={Bookings}></Route>
    </Switch>
  );
}

export default Main;
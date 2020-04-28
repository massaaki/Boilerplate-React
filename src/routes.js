import React from 'react';
import { Switch, Route } from 'react-router-dom';

/**
 * <> Define your pages here
 * You can use snippet rfc to create a functional component
 */
import Home from './pages/Home';
import Cart from './pages/Cart';
//* </> End Pages

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}

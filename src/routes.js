import React from 'react';
import { Switch, Route } from 'react-router-dom';

/**
 * <> Define your pages here
 * You can use snippet rfc to create a functional componentgit
 */
import Home from './pages/Home';
import HookSample from './pages/HoookSample';
//* </> End Pages

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hook-sample" component={HookSample} />
      {/* <Route path="/PATH" component={PAGE_NAME} /> */}
    </Switch>
  );
}

import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

/**
 * <> Define your pages here
 * You can use snippet rfc to create a functional componentgit
 */
import Home from '~/pages/Home';
import HookSample from '~/pages/HoookSample';
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


## Field valitation
yarn add yup


import * as Yup from 'yup';

const schema =  Yup.object().shape({
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  pasword: Yup.string.required('A senha é obrigatória')
});

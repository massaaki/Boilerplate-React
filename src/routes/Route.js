import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/default';

export default function RouterWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {

 /**
  *
  * Add logic to switch layout here
  */
  //TODO

  //Sample Auth signed
    const signed = false;
    /**
     * Validations
     */
    if (!signed && isPrivate) {
      return <Redirect to="/" />;
    }

    if(signed && !isPrivate) {
      return <Redirect to="/dashboard" />;
    }
    //End - Validation

    // const Layout = signed ? DefaultLayout : AuthLayout;
    const Layout = DefaultLayout;

  //End Layout switch

  return(
    <Route
      { ...rest }
      render={ props => (
          <Layout>
            <Component {...props}/>
          </Layout>
        )
      }
    />
  );
}

RouterWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouterWrapper.defaultProps = {
  isPrivate: false,
}

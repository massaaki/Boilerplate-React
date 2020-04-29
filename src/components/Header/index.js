import React from 'react';
import { connect } from 'react-redux';
import { Container } from './styles';

import logo from '../../assets/images/logo.svg';

function Header({sampleItens}) {
  return (
    <Container>
      <img src={logo} alt="" />
      <ul>
        { sampleItens.map(sample => (
          <li key={sample.toString}>{sample.item}</li>
        )) }

      </ul>
    </Container>
  );
}

const mapStateToProps = state => ({
  sampleItens : state.reducerSample
});

export default connect(mapStateToProps)(Header);

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Container } from './styles';

import * as SampleActions from '../../store/modules/reducerSample/actions';


class Home extends Component {
  state = {
    item: []
  };


  componentDidMount() {
    //api request here
    const response = ['sample'];


    // update itens here
    this.setState({
      item: response,
    });

  }

  handleAddItem(item) {
    const { addItemSample } = this.props; // SampleActions.addItemSample(item)
    addItemSample(item);
  }

  render() {
    return (
      <>
        <h1>Hello</h1>
        <button type="button" onClick={ () => this.handleAddItem('hello') }> Set Item</button>
      </>
    )

  }
}


const mapDispatchToProps = dispatch =>
  bindActionCreators(SampleActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);

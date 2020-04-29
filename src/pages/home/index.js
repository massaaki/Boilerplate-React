import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import { Container } from './styles';

import * as SampleActions from '../../store/modules/reducerSample/actions';


export default function Home() {
  const [item, setItem] = useState([])

  const dispatch = useDispatch();

  useEffect( () => {
    const response = ['sample'];
    setItem(response);
  }, []);

  // componentDidMount() {
  //   const response = ['sample'];
  //   this.setState({
  //     item: response,
  //   });

  // }

  function handleAddItem() {
   // const { addItemSample } = this.props; // SampleActions.addItemSample(item)
   dispatch(SampleActions.addItemSample(item));
  }




  return (
    <>
      <h1>Hello</h1>
      <button type="button" onClick={ () => handleAddItem() }> Set Item</button>
    </>
  )


}


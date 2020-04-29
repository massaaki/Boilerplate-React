import React, { useState, useEffect, useMemo } from 'react';

function HookSample() {
  /**
   * State
   */
  const [techs, setTech] = useState([
    'React',
    'React Native'
  ]);

  const [newTech, setNewTech] = useState('');
   //End - State



  /**
   * Methods
   */
  function handleAdd() {
    setTech([
      ...techs,
      newTech
    ])

    setNewTech('');
  }
  //End - Methods



  // * Events
  /**
   * useEffect( <function>, [] )
   * Similar ComponentDidMount(){}
   * parameter1: Function to execute
   * parameter2: empty array - if this event doesnt have states to listen,
   *             execute once
   */
  useEffect(() => {
    console.log('mount your states here');

    //EXAMPLE
    // const techStorage = localStorage.getItem('techs');
    // if(techs) {
    //   setTech(JSON.parse(techStorage));
    // }
  }, []);


  /**
   * useEffect( <function>, [stateToListen] )
   */
  useEffect(() => {
    console.log('this event is handled every time state techs is updated');
    // localStorage.setItem('techs', JSON.stringify(techs));

    /**
     * optional
     * similar componentDidUnmount
     */
    // return () => {
    //   console.log('componentDidUnmount');
    // }
  }, [techs]);
  //End - Events

  /**
   * Vars
   */
  const techSize = useMemo(() => techs.length, [techs]); //techs only update if state [techs] changes

  //End - Vars



  return (
    <>
      <h1>Route-Hook Example page</h1>
      <ul>
        {techs.map(tech => <li key={tech}>{tech}</li> )}
      </ul>
      <strong> Techs registred: {techSize} </strong>
      <br/>
      <input type="text" value={newTech} onChange={ e => setNewTech( e.target.value ) } />
      <button type="button" onClick={handleAdd}>Add</button>
    </>
  )
}


export default HookSample;

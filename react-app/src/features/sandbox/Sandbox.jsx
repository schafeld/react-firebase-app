import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testReducer';

export default function Sandbox() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);

  return (
    <>
      <h2>Testing 123</h2>
      <h3>The data is: {data}</h3>
      <Button onClick={ () => dispatch({type: INCREMENT_COUNTER}) } content='Increment' color='green' />
      <Button onClick={ () => dispatch({type: DECREMENT_COUNTER}) } content='Decrement' color='red' />
    </>
  )
}
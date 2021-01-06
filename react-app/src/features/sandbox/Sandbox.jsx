import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';

export default function Sandbox() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);

  return (
    <>
      <h2>Testing 123</h2>
      <h3>The data is: {data}</h3>
      <Button onClick={ () => dispatch(increment(20)) } content='Increment' color='green' />
      <Button onClick={ () => dispatch(decrement(11)) } content='Decrement' color='red' />
    </>
  )
}
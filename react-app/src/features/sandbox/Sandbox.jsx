import React from 'react';
import { useSelector } from 'react-redux';

export default function Sandbox() {
  const data = useSelector(state => state.data)
  return (
    <>
      <h2>Testing 123</h2>
      <h3>The data is: {data}</h3>
    </>
  )
}
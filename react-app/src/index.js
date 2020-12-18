import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

function render() {
  ReactDOM.render(<App />, rootElement)
}

// Trick to trigger hot reload without page reload
if (module.hot) {
  module.hot.accept('./App', function() {
    setTimeout(render);
  })
}

render();

// ReactDOM.render(
//   <React.StrictMode>
//   {/* Remove 'strict mode' wrapper if annoyed by excessive warnings in console. */}
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

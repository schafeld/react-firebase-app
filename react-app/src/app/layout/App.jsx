import { Button } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <h1>Olli's App</h1>
      <button type="button" className="ui icon red button">
        <i className="user icon"></i>CSS Button
      </button>

      <Button icon="user" content="React Semantic UI Button" color="green" loading="true" />
    </div>
  );
}

export default App;

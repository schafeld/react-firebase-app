import React from "react"
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/navigation/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </>
  );
}

export default App;

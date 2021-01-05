import React, { useState } from "react"
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/navigation/NavBar";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";

function App() {
  const [setFormOpen] = useState(true);
  const [setSelectedEvent] = useState(null);

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <>
      {/* No navbar on home page */}
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
          <NavBar setFormOpen={handleCreateFormOpen} />
          <Container className="main">
            <Route exact path='/events' component={EventDashboard} />
            <Route path='/events/:id' component={EventDetailedPage} />
            <Route path='/createEvent' component={EventForm} />
          </Container>
        </>
        )}
      />
    </>
  );
}

export default App;

// <EventDashboard
// formOpen={formOpen}
// setFormOpen={setFormOpen}
// selectEvent={handleSelectEvent}
// selectedEvent={selectedEvent}
// />
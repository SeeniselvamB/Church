import React from 'react';
import './Events.css';

function Events() {
  return (
    <section className="events-section" id="events">
      <div className="events-container">
        <h2>📅 Upcoming Events</h2>
        <div className="event-card">
          <h3>Annual Christmas Celebration</h3>
          <p>Date: December 24, 2024</p>
          <p>Time: 6:00 PM Onwards</p>
        </div>
        <div className="event-card">
          <h3>Youth Worship Night</h3>
          <p>Date: July 20, 2024</p>
          <p>Time: 7:00 PM</p>
        </div>
      </div>
    </section>
  );
}

export default Events;

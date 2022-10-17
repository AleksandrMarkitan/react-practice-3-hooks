// import eventsData from '../data/eventsData.json';
// import { useState, useEffect } from 'react';
// import { EventList } from '../components/EventList/EventList';

// export const App = () => {
//   const [events, setEvents] = useState(
//     () => JSON.parse(localStorage.getItem('events')) ?? eventsData
//   );

//   useEffect(() => {
//     localStorage.setItem('events', JSON.stringify(events));
//   }, [events]);

//   const deleteEvent = eventId =>
//     setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));

//   return (
//     <>
//       <EventList events={events} deleteEvent={deleteEvent} />
//     </>
//   );
// };

import { useState, useEffect } from 'react';
import { fetchApi } from '../fetchApi/fetchApi';
import { EventList } from '../components/EventList/EventList';

export const App = () => {
  const [events, setEvents] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [page, setPage] = useState(1);

  const deleteEvent = eventId =>
    setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));

  const showEvents = () => {
    setIsShown(true);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (isShown) {
      fetchApi(page).then(resp =>
        setEvents(prevEvents => [...prevEvents, ...resp.data._embedded.events])
      );
    }
  }, [isShown, page]);
  return (
    <>
      {isShown && <EventList events={events} deleteEvent={deleteEvent} />}
      {!isShown && (
        <button type="button" onClick={showEvents}>
          Show events
        </button>
      )}
      {isShown && (
        <button type="button" onClick={loadMore}>
          loadMore
        </button>
      )}
    </>
  );
};

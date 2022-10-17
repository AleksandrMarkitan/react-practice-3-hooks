export const EventList = ({ events, deleteEvent }) => {
  return (
    <ul>
      {events.map(({ id, name, images }) => (
        <li key={id}>
          <h2>{name}</h2>
          <img src={images[0].url} alt={name} width="260" />
          <button type="button" onClick={() => deleteEvent(id)}>
            {' '}
            Delete event{' '}
          </button>
        </li>
      ))}
    </ul>
  );
};

import axios from 'axios';

const apikey = 'tIj1kC332ExvV8vs1uBAp1fasaO5ERpG';
axios.defaults.baseURL =
  'https://app.ticketmaster.com/discovery/v2/events.json';

export const fetchApi = async page => {
  const config = {
    params: {
      apikey,
      page,
    },
  };
  return await axios(config);
};

import apiURL from './apiConfig.js'; // Corrected the import path

const createGame = async (gameName) => {
  const response = await fetch(`${apiURL}/games/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: gameName }),
  });

  const data = await response.json();
  const key = data.result.split('ID: ')[1]; // Extract the game ID (key) from the response
  return key;
};

const getAPI = async () => {
  const data = await fetch(`${apiURL}/scores/`);
  const result = await data.json();
  return result;
};

const setAPI = async (data) => {
  const fetchData = await fetch(`${apiURL}/scores/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const result = await fetchData.json();
  return result;
};

export { getAPI, setAPI, createGame };

const newGame = {
  name: 'roblox',
};

let newGameId = '';

const createGame = async () => {
  const Url_game = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

  const response = await fetch(Url_game, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newGame),
  });

  const gameId = await response.json();
  return gameId;
};
// Call the async function to make the POST request
createGame().then((id) => {
  newGameId = id.result.slice(14, -7);
  console.log(newGameId);
});

/// //////////////////////////////////////////////////////////////////////////

const postDataToAPI = async () => {
  const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers required by the API (e.g., authentication tokens).
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log('POST request successful!');
    console.log('Response data:', responseData);
  } catch (error) {
    console.error('POST request failed:', error.message);
  }
};

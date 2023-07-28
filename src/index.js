import './styles.css';
import display from './modules/display.js';
import { getAPI, setAPI, createGame } from './modules/API.js';

const initializeGame = async () => {
  console.log(await createGame('roblox'));

  const getScore = async () => {
    const scores = await getAPI();
    display(scores);
  };
  const form = document.querySelector('form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.querySelector('.name');
    const score = document.querySelector('.score');
    const playername = name.value.trim();
    const playerscore = score.value.trim();
    const data = {
      user: playername,
      score: playerscore,
    };
    name.value = '';
    score.value = '';
    await setAPI(data);
  });

  document.querySelector('.refresh').addEventListener('click', () => {
    getScore();
  });

  getScore();
};

initializeGame();

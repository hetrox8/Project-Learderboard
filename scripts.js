// index.js (your entry file)
import './styles.css'; // Replace with the path to your CSS file

 const postDataToAPI = async () => {
    const apiUrl = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games";
      
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers required by the API (e.g., authentication tokens).
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const responseData = await response.json();
      console.log("POST request successful!");
      console.log("Response data:", responseData);
    } catch (error) {
      console.error("POST request failed:", error.message);
    }
  }
  
  const newGame = {
    name: "roblox",
};
const createGame = () => {
    const Url_game = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games'
}

const response = await fetch(Url_game, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
})

  // Call the async function to make the POST request
  postDataToAPI();
  

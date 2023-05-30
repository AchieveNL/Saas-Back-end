const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/generate-image', (req, res) => {
  // Extract the prompt value from the request body
  const prompt = req.body.prompt;
  
  // User prompts
  const width = 800; // Desired width of the image
  const height = 600; // Desired height of the image
  const grayscale = true; // Whether the image should be grayscale or in color

  // Make a request to the Lorem Picsum API
  axios.get(`https://picsum.photos/${width}/${height}${grayscale ? '?grayscale' : ''}`)
    .then(response => {
      const imageUrl = response.request.res.responseUrl;
      
      // Construct the response object with the generated image URL and prompt value
      const imageResponse = {
        imageUrl,
        prompt
      };
      
      res.json(imageResponse);
    })
    .catch(error => {
      console.error('Error fetching image from Lorem Picsum:', error);
      res.status(500).json({ error: 'An error occurred while generating the image.' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

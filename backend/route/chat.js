const express = require('express');
const router = express.Router();
const dotenv=require("dotenv");
dotenv.config();
router.post('/', async (req, res) => {
  try {
    const { message } = req.body;

    // Make a request to the ChatGPT API

    // Create an array to hold both user and ChatGPT messages
    const messages = [
      { role: 'user', content: message }, // User message
      { role: 'assistant', content: '' }, // ChatGPT message (initially empty)
    ];

    ///////////////////

    try {
      const { Configuration, OpenAIApi } = require("openai");

      const configuration = new Configuration({
        apiKey: process.env.chatkey,
      });
      const openai = new OpenAIApi(configuration);

      console.log("Sending message to ChatGPT");

      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages, // Pass the messages array
        temperature: 0.2,
      });

      const text = completion.data.choices[0].message.content;

      // Update the ChatGPT message in the messages array
      messages[1].content = text;

      console.log(`Sending response to client: ${text}`);

      console.log('Received message: ' + message);

      // Return the response to the frontend
      res.json({ response: text });
    } catch (error) {
      console.error('Error in ChatGPT route:', error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  } catch (error) {
    console.error('Error in request:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;

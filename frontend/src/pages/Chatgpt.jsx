import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Chatgpt.css';

const ChatGpt = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = async () => {
    if (inputValue.trim() === '') return;

    // Add user message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: 'user', content: inputValue },
    ]);

    // Clear input field
    setInputValue('');

    try {
      // Send user message to the server
      const response = await axios.post('http://localhost:4000/chat', { message: inputValue });

      // Add ChatGPT's response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'chatbot', content: response.data.response },
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chat-container" id="chat-container">
      <div className="chat-header">
        <h2>Chat with ChatGPT</h2>
        <p>Type a message and press Enter to send</p>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.role === 'user' ? 'user-message' : 'chatbot-message'}`}
          >
            {message.content}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatGpt;



import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Chatgpt.css';


const ChatGpt = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const chatMessagesRef = useRef(null);

    const scrollToBottom = () => {
        chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    };

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
            const response = await axios.post(`${process.env.REACT_APP_backendaddress}/chat`, { message: inputValue });

            // Add ChatGPT's response to the chat
            setMessages((prevMessages) => [
                ...prevMessages,
                { role: 'chatbot', content: response.data.response },
            ]);

            scrollToBottom(); // Scroll to the bottom after adding a new message
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    useEffect(() => {
        scrollToBottom(); // Scroll to the bottom when component mounts
    }, [messages]); // Scroll to the bottom when messages state updates

    return (
        <div className="chat-container" id="chat-container">
            <div className="chat-header">
                <h2>Chat with ChatGPT</h2>
                <p>Type a message and press Enter to send</p>
            </div>
            <div className="chat-messages" ref={chatMessagesRef}>
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${message.role === 'user' ? 'user' : 'assistant'}`}
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

import React, { useState } from "react";
import axios from "axios";
import "./DeepSeekChat.css";

const DeepSeekChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      console.log("DeepSeek API Key:", process.env.REACT_APP_DEEPSEEK_API_KEY);
      const response = await axios.post(
        "https://api.deepseek.com/chat",
        {
          model: "deepseek-chat",
          messages: newMessages.map((msg) => ({
            role: msg.sender === "user" ? "user" : "assistant",
            content: msg.text,
          })),
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_DEEPSEEK_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      setMessages([...newMessages, { text: response.data.message, sender: "bot" }]);
    } catch (error) {
      console.error("DeepSeek API error:", error);
      setMessages([...newMessages, { text: "Oops! Something went wrong.", sender: "bot" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <h1>DeepSeek Chatbot</h1>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="message bot">Thinking...</div>}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default DeepSeekChat;

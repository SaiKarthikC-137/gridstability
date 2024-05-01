import React, { useState } from "react";
import styles from "./Chatbot.module.css"; // Ensure the CSS is linked properly

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const sendMessage = () => {
    const message = input.trim();
    if (!message) return;
    const newMessages = [...messages, { type: "user", text: message }];
    setMessages(newMessages);
    setInput("");

    // Add a dummy response
    const dummyResponse =
      "Thank you for your message. This is a dummy response.";
    setMessages([...newMessages, { type: "bot", text: dummyResponse }]);
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatBox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.type === "user" ? styles.userMessage : styles.botMessage
            }
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className={styles.inputSection}>
        <input
          type="text"
          value={input}
          onChange={handleInput}
          className={styles.inputField}
          onKeyPress={(event) => event.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className={styles.sendButton}>
          <i className="fas fa-paper-plane"></i> {/* Optionally add an icon */}
        </button>
      </div>
    </div>
  );
}

export default Chatbot;

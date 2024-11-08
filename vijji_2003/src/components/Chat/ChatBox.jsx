import React from 'react';
import Message from './Message';

const ChatBox = ({ messages, loading }) => {
    return (
        <div className="chat-box">
            {messages.map((msg, index) => (
                <Message key={index} content={msg.content} role={msg.role} />
            ))}
            {loading && <div>Loading...</div>}
        </div>
    );
};

export default ChatBox;

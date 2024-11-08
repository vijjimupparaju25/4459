import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../store/slices/chatSlice';
import aiApi from '../api/aiApi';
import ChatBox from '../components/Chat/ChatBox';
import InputField from '../components/Chat/InputField';

const Chat = () => {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.chat.messages);
    const [loading, setLoading] = useState(false);

    const handleSendMessage = async (userMessage) => {
        dispatch(addMessage({ content: userMessage, role: 'user' }));
        setLoading(true);
        try {
            const aiResponse = await aiApi.sendMessage(userMessage);
            dispatch(addMessage({ content: aiResponse, role: 'ai' }));
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <ChatBox messages={messages} loading={loading} />
            <InputField onSendMessage={handleSendMessage} />
        </div>
    );
};

export default Chat;

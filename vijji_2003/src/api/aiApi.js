import axios from 'axios';

const AI_API_URL = 'https://api.openai.com/v1/chat/completions'; // Change this if using another API
const API_KEY = process.env.REACT_APP_AI_API_KEY;

const sendMessage = async (message) => {
    try {
        const response = await axios.post(
            AI_API_URL,
            {
                model: 'gpt-3.5-turbo', // Specify the model
                messages: [{ role: 'user', content: message }],
            },
            {
                headers: {
                    'Authorization': `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};

export default { sendMessage };

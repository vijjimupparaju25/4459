import React from 'react';

const Message = ({ content, role }) => {
    return (
        <div className={role}>
            <strong>{role === 'user' ? 'You' : 'AI'}:</strong> {content}
        </div>
    );
};

export default Message;

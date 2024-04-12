"use client";

import React, { use, useState, useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import ChatInput from '../components/chat/ChatInput';
import Chatbox from '../components/chat/ChatBox';
import { useChat } from 'ai/react';


const ChatPage = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat({onFinish: () => {setGenerating(false)}});

    const [generating, setGenerating] = useState(false);

    return (
        <div className="flex flex-col h-screen text-white">
            <Navbar />
            <div className="overflow-auto">
                <Chatbox messages={messages} />
            </div>
            <ChatInput
                input={input}
                handleInputChange={handleInputChange}
                handleSubmit={(e) => {
                    setGenerating(true);
                    handleSubmit(e);
                }}
                generating={generating}
            />
        </div>
    );
};

export default ChatPage;
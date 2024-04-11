"use client"; 

import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import ChatInput from '../components/chat/ChatInput';
import Chatbox from '../components/chat/ChatBox';
import { useChat } from 'ai/react';


const ChatPage = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat();


    return (
        <div className="flex flex-col h-screen text-white">
            <Navbar />
            <div className="overflow-auto">
                <Chatbox messages={messages} />
            </div>
            <ChatInput 
                input={input} 
                handleInputChange={handleInputChange} 
                handleSubmit={handleBotThinking}
            />
        </div>
    );
};


export default ChatPage;
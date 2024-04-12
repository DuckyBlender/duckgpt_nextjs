import React from 'react';
import Image from 'next/image';
import { Message, useChat } from 'ai/react';
import MessageComponent from './MessageComponent';

const Chatbox = ({messages} : {messages: Message[]}) => {
    return (
        <div className="bg-dark-100 h-screen flex flex-col">
            <div className="flex-grow overflow-y-auto bg-dark-200 rounded-lg p-4 m-4 shadow-lg whitespace-pre-wrap">
                {messages.map((message) => (
                    <MessageComponent key={message.id} props={message} />
                ))}
            </div>
        </div>
    );
};

export default Chatbox;
"use client"

import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Message from '../components/Message'
import Navbar from '../components/Navbar'

const ChatPage = () => {
    // TODO: Find a better way to handle this cause this is terrible
    const searchParams = useSearchParams()
    const model = searchParams.get('model') ?? "default";

    const [messages, setMessages] = useState([
        { user: 'bot', message: 'Hello, how can I assist you today?', model: model, tokensPerSecond: 69 },
        { user: 'user', message: 'I need help with my code.' },
    ])

    const [newMessage, setNewMessage] = useState('')

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { user: 'user', message: newMessage }])
            setNewMessage('')
            // Here you can add the logic to handle the response from the AI model
        }
    }

    return (
        <div className="flex flex-col h-screen bg-dark text-white">

            <Navbar />
            <div className="flex flex-col flex-grow p-4" >
                <div className="flex-grow overflow-y-auto bg-dark-400 rounded-lg shadow p-4 m-4">
                    {messages.map((message, index) => (
                        <Message key={index} props={{ ...message, user: message.user as "bot" | "user", tokensPerSecond: message.tokensPerSecond || null, model: message.model || null }} />
                    ))}
                </div>
                <div className="flex items-stretch m-4">
                    <textarea placeholder="Type here..." className="textarea textarea-bordered flex-grow bg-dark-300 text-white" onChange={(e) => setNewMessage(e.target.value)} onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                        }
                    }} value={newMessage} />
                    <button className="btn btn-primary ml-4 h-full" onClick={handleSendMessage}>Send</button>
                </div>
            </div>
            </div>

    )
}

export default ChatPage
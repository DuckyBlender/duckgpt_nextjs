"use client"

import React, { useState } from 'react'
import Message from '../components/Message'

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { user: 'bot', message: 'Hello, how can I assist you today?', model: 'Model 1' , tokensPerSecond: 69},
    { user: 'user', message: 'I need help with my code.'},
  ])

  const handleSendMessage = (message: string) => {
    setMessages([...messages, { user: 'user', message }])
    // Here you can add the logic to handle the response from the AI model
  }

return (
    <div className="flex flex-col h-screen">
        <div className="flex-grow overflow-y-auto">
            {messages.map((message, index) => (
                <Message key={index} props={{ ...message, user: message.user as "bot" | "user", tokensPerSecond: message.tokensPerSecond || null, model: message.model || null }} />
            ))}
        </div>
        <div className="flex-shrink-0 m-4">
            <div className="flex rounded-lg border-2 border-gray-200 divide-x divide-gray-200">
                <textarea className="w-full focus:outline-none" placeholder="Type your message here"></textarea>
                <button onClick={() => handleSendMessage('Your message')} className="px-4 py-2 text-blue-500 hover:text-blue-600 focus:outline-none">Send</button>
            </div>
        </div>
    </div>
)
}

export default ChatPage
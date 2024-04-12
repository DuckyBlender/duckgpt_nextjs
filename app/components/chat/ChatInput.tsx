"use client";

import React from 'react'
import Image from 'next/image';
import { useChat, UseChatHelpers } from 'ai/react';

import sendIcon from "../../../public/send.svg";
import fireIcon from "../../../public/fire.svg";


const ChatInput = ({ input, handleInputChange, handleSubmit, generating}: { input: string, handleInputChange: UseChatHelpers['handleInputChange'], handleSubmit: UseChatHelpers['handleSubmit'], generating: boolean }) => {
    return (
        <div className="flex m-4 space-x-4">
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)} className="flex-grow flex space-x-4">
                <textarea
                    placeholder="Type here..."
                    className="textarea textarea-bordered flex-grow bg-dark-300 text-white resize-none"
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>); // this is the worst code ever but it works
                        }
                    }}
                    value={input}
                    disabled={generating}
                />
                <button className="btn btn-primary h-full" disabled={generating} type="submit">Send <Image src={sendIcon} alt="Send icon" /></button>
            </form>
            {/* <button className="btn btn-secondary h-full" onClick={handleClearConversation}>Clear <Image src={fireIcon} alt="Fire icon" /></button> */}
        </div>
    )
}

export default ChatInput
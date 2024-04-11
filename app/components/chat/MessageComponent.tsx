import React from 'react'
import Image from 'next/image';
import personIcon from "../../../public/person.svg";
import robotIcon from "../../../public/robot.svg";
import duckIcon from "../../../public/duck.webp";
import { Message } from 'ai/react';


export interface MessageInterface {
    role: "assistant" | "user",
    content: string | null,
    model: string | null,
    tokensPerSecond: number | null
}

const MessageComponent = ({ props }: { props: Message }) => {
    return (
        <>
            <div className={`chat ${props.role === 'assistant' ? 'chat-start' : 'chat-end'}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        {props.role === 'assistant' ? <Image src={duckIcon} alt="Robot icon" /> : null}
                        {props.role === 'user' ? <Image src={personIcon} alt="Person icon" className="invert"/> : null}
                    </div>
                </div>
                <div className="chat-header">
                    {props.role}
                </div>
                <div className="chat-bubble">{props.content}</div>
                {/* <div className="chat-footer opacity-50"> */}
                    {/* todo: tokens/s and model */}
                {/* </div> */}
            </div>

        </>
    )
}

export default MessageComponent
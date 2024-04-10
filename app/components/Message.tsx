import React from 'react'

interface MessageInterface {
    user: "bot" | "user",
    message: string,
    model: string | null,
    tokensPerSecond: number | null
}

const Message = ({ props }: { props: MessageInterface }) => {
    return (
        <>
            <div className={`chat ${props.user === 'bot' ? 'chat-start' : 'chat-end'}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        {/* todo: update this imge based on the chat */}
                        <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="chat-header">
                    {props.user}
                </div>
                <div className="chat-bubble">{props.message}</div>
                <div className="chat-footer opacity-50">
                    {props.model ? `${props.model}` : null}{props.tokensPerSecond ? ` - ${props.tokensPerSecond} tokens per second` : null}
                </div>
            </div>

        </>
    )
}

export default Message
'use client'

import Link from 'next/link'
import React from 'react'

const StartChatButton = () => {
    return (
        <Link href="/chat">
            <button className="btn text-white">Start Chat</button>
        </Link>
    )
}

export default StartChatButton
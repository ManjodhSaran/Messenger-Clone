import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';
import db from "../Firebase/firebase";

import './Messages.css'

import Message from '../Message/Message'

const Messages = ({ username }) => {
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        db.collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })));
            })
    }, [])

    return (
        <div className="messages">


            <FlipMove>
                {messages.map(({ id, message, timestamp }) => <Message key={id} username={username} message={message} timestamp={timestamp} />)}
            </FlipMove>

        </div>

    )
}

export default Messages;

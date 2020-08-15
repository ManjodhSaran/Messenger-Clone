import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import "./Message.css"

const Message = forwardRef(({ username, message, timestamp }, ref) => (

    <div ref={ref} className={`message ${username === message.username && "message_user"} `}>
        <p className={`user_name ${username === message.username && "hidden"} `}>{!(username === message.username) && `${message.username || 'Unknown User'}`}</p>
        <Card id="input-form" className={username === message.username ? "message_userCard" : "message_guestCard"} >
            <CardContent>
                <Typography color="white" variant="h5" component="h2">
                    <p className="user_message">{message.message}</p>
                </Typography>
            </CardContent>
        </Card>
        <p className="timestamp">{timestamp}</p>

    </div>
)
);

export default Message;

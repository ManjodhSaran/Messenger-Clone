import React, { useState } from 'react';
import firebase from "firebase";

import { FormControl, Input, IconButton } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

import db from "../Firebase/firebase";
import "./MessageForm.css"

const MessageForm = ({ username }) => {
    const [input, setInput] = useState("");

    const sendMessage = (event) => {
        event.preventDefault();

        db.collection("messages").add({
            username: username,
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");
    };

    return (
        <div className="messageform">
            <FormControl className="form-control">
                <Input className="form-input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)} />
                <IconButton
                    className="form-icon"
                    disabled={!input}
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={sendMessage}
                    onKeyPress={event => console.log(event.target.key)}>
                    <SendIcon />
                </IconButton>
            </FormControl>
        </div>
    )
}

export default MessageForm;

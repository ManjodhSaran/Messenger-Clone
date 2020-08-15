import React from 'react';

import './App.css'

// Components
import Header from './Header/Header';
import Messages from './Messages/Messages';
import MessageForm from './MessageForm/MessageForm';

function App() {

  const username = (prompt("Enter Name"));

  return (
    <main>
      <Header username={username} />
      <Messages username={username} />
      <MessageForm username={username} />
      <hr className="border-bottom" />
    </main>
  );
}

export default App;
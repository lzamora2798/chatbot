import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Mensaje from './Mensaje/Mensaje.js';

import './msm.css';

const Mensajes = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => 
        <div key={i}>
            <Mensaje message={message} name={name}/>
        </div>
    
    )}
  </ScrollToBottom>
);

export default Mensajes;

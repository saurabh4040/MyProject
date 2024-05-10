import React, { useEffect, useState } from "react";
import { user } from "../Join/Join.jsx";
import socketIo from 'socket.io-client'
import { toast } from "react-toastify";
import sendLogo from '../../ChatLoginImage/send.png';
import "./Chat.css";
import Message from "../Message/Message.jsx";
import ReactScrollToBottom from 'react-scroll-to-bottom';
import closeIcon from '../../ChatLoginImage/closeIcon.png';

let socket;

const ENDPOINT= 'http://localhost:5000';

const Chat = () => {
  const [id , setId] = useState("");
  const [messages, setMessages] = useState([]);

  const send = () => {
    const message = document.getElementById('chatInput').value;
    socket.emit("message", {message, id});
    document.getElementById('chatInput').value = "";

  }

  useEffect(() => {
     socket = socketIo(ENDPOINT, {transports: ['websocket']});

    socket.on("connect", () => {
        toast.success("User Connected");
        setId(socket.id);
    });
    socket.emit('joined', { user });

    socket.on('welcome', (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message );
    });

    socket.on('userJoined', (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    socket.on("leave", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    return () => {
      // socket.emit("disconnect");
      socket.off();
    };
  }, []);


  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setMessages([...messages, data]);
    })
    return () => {
      socket.off();
    }
  }, [messages]);

  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header">
          <h2>Live Chat</h2>
         <a href="/join"> <img src={closeIcon} alt="Close" /></a>
        </div>
        <ReactScrollToBottom className="chatBox">
          {messages.map((item,i) => <Message user={item.id === id ? '' : item.user }  message={item.message} classs={item.id === id ? 'right' : 'left' } /> )}
        </ReactScrollToBottom>
        <div className="inputBox">
            <input placeholder="Enter your Message" onKeyPress={(e) => e.key === "Enter" ? send() : null } type="text" id="chatInput"/>
            <button onClick={send} className="sendBtn"><img src={sendLogo} alt="Send" /></button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

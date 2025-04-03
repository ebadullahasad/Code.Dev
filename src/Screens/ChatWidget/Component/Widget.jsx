import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import Inputfield from "../../../Components/Inputfield";
import Button from "../../../Components/Button";
import { io } from "socket.io-client";
import { useMemo } from "react";
const Widget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const socket = useMemo(() => io("http://localhost:3000/"), []);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket.id);
    });
    socket.on("welcome", (s) => {
      console.log(s);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = useCallback(() => {
    if (message.trim() === "") return;
    const newMessage = {
      author: "user",
      text: message,
      time: new Date().toLocaleTimeString(),
    };

    socket.emit("send_message", newMessage);
    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
  });

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen && (
        <div>
          <Button
            onPress={() => setIsOpen(true)}
            divstyle="bg-lightgray1 text-white p-3 rounded-full shadow-lg transition-all"
            image={<MessageCircle size={24} />}
          />
        </div>
      )}

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-16 right-5 w-80 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-lightgray1 text-white p-3 flex justify-between items-center">
            <span className="font-semibold">Chat with us</span>
            <Button onPress={() => setIsOpen(false)} image={<X size={20} />} />

            {/* </Button> */}
          </div>

          {/* Chat Messages Area */}
          <div className="h-64 p-3 overflow-y-auto text-gray-700 flex flex-col">
            {messages.map((msg, index) => (
              <div key={index} className="p-2 bg-gray-200 rounded-lg mb-2">
                {msg.text}{" "}
                <span className="text-xs text-gray-500">{msg.time}</span>
                {/* <strong>{msg.author}:</strong> */}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="border-t border-gray-200 p-3 flex items-center">
            <Inputfield
              values={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Type a message..."
              divstyle="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Button
              onPress={sendMessage}
              divstyle="ml-2 text-white bg-lightgray1  p-2 rounded-lg"
              btnname="Send"
            ></Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Widget;

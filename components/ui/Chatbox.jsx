'use client';

import { useState } from 'react';
import Image from 'next/image';

const Chatbox = () => {
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content:
        'You are a hotel booking customer service representative answering questions',
    },
    { role: 'assistant', content: 'Hello, how can I help you?' },
  ]);

  async function onSubmit(event) {
    event.preventDefault();

    setMessage('');
    setIsSendingMessage(true);

    const formData = new FormData(event.target);
    const message = {
      role: 'user',
      content: formData.get('message'),
    };
    const newMessages = [...messages, message];

    setMessages(newMessages);

    try {
      const result = await fetch('/api/openai', {
        method: 'POST',
        body: JSON.stringify({
          messages: newMessages,
        }),
      });

      const data = await result.json();
      setMessages([...newMessages, data.choices[0].message]);
      setIsSendingMessage(false);
    } catch (error) {}
  }

  return (
    <div className="z-10 h-[400px] w-[300px] border-[1px] border-[#102A43] border-solid fixed bottom-[130px] right-[40px] rounded-[12px] flex flex-col overflow-hidden">
      <div className="h-[36px] bg-[#0276D4] rounded-tl-[9px] rounded-tr-[9px] rounded-b-[0] rounded-l-[0] flex items-center text-[#FFFFFF] px-[12px]">
        Support Bot
      </div>
      <ul className="flex-1 flex flex-col px-[12px] bg-[#F0F4F8] overflow-auto">
        {messages.slice(1).map((message, index) => {
          const isUser = message.role === 'user';
          const isChatBot = !isUser;

          return (
            <li
              key={index}
              className={
                isUser
                  ? 'py-[8px] px-[12px] rounded-[12px] bg-[#0276D4] text-[#FFFFFF] w-[180px] self-end'
                  : 'py-[8px] flex items-center'
              }
            >
              {isChatBot && (
                <Image
                  src="/images/chatbot.svg"
                  alt="Chatbot Icon"
                  className="bg-[#BEF8FD] rounded-[50%] mr-[8px] border-2 border-solid border-[#102A43]"
                  width={32}
                  height={32}
                  priority
                />
              )}
              {isUser ? (
                message.content
              ) : (
                <div className="bg-[#FFFFFF] py-[8px] px-[12px] rounded-[12px] w-[180px]">
                  {message.content}
                </div>
              )}
            </li>
          );
        })}
        {isSendingMessage && (
          <li className="py-[8px] flex items-center">
            <Image
              src="/images/chatbot.svg"
              alt="Chatbot Icon"
              className="bg-[#BEF8FD] rounded-[50%] mr-[8px] border-2 border-solid border-[#102A43]"
              width={32}
              height={32}
              priority
            />
            <div className="bg-[#FFFFFF] py-[8px] px-[12px] rounded-[12px] w-[180px]">
              ...
            </div>
          </li>
        )}
      </ul>
      <form
        className="h-[36px] flex items-center justify-center border-0 border-top-1 overflow-hidden px-[12px] bg-[#FFFFFF]"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="message"
          className="flex-1 focus:outline-0"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        />
        <button
          type="submit"
          className="ml-[8px] border-0 bg-transparent cursor-pointer"
        >
          <Image
            src="/images/send.svg"
            alt="Send Button"
            width={20}
            height={20}
            onClick={() => {}}
            priority
          />
        </button>
      </form>
    </div>
  );
};

export default Chatbox;

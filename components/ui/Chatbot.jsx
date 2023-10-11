'use client';

import Image from 'next/image';
import Chatbox from './Chatbox';
import { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <Chatbox />}
      <div
        className="cursor-pointer fixed bottom-[70px] right-[40px] bg-[#BEF8FD] rounded-[50%] h-[50px] w-[50px] flex items-center justify-center transition ease-in-out delay-200 hover:scale-[1.2]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? (
          <Image
            src="/images/chatbot.svg"
            alt="Chatbot Icon"
            width={50}
            height={50}
            priority
          />
        ) : (
          <Image
            src="/images/close.svg"
            alt="Close Icon"
            className="fill-[#829AB1]"
            width={30}
            height={30}
            priority
          />
        )}
      </div>
    </>
  );
};
export default Chatbot;

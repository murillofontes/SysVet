// components/FloatingButton.tsx

import React, { useState } from 'react';
import ChatBox from './ChatBox';
import styles from './page.module.css';

interface LayoutProps {
    children: React.ReactNode;
}

const FloatingButton: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={styles.floatingButton} onClick={toggleChat}>
        Chat
      </button>
      <ChatBox isOpen={isOpen} toggleChat={toggleChat} />
    </>
  );
};

export default FloatingButton;

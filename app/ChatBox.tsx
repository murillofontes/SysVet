
import React, { useState } from 'react';
import styles from './page.module.css';

interface ChatBoxProps {
    isOpen: boolean;
    toggleChat: () => void;
  }
  
  const ChatBox: React.FC<ChatBoxProps> = ({ isOpen, toggleChat }) => {
    return (
      <>
        {isOpen && (
          <div className={styles.chatBox}>
            <div className={styles.chatHeader}>
            <button onClick={toggleChat} className={styles.closeButton}>
                X
              </button><br/><br/>
              <h3>Bob</h3>
            </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className={styles.chatContent}>
              <p>Como posso te ajudar?</p><br/>
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className={styles.chatInput}
              />
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default ChatBox;
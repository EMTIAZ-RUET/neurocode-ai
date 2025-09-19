import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ChatContainer = styled(motion.div)`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 380px;
  height: 500px;
  background: ${props => props.theme.colors.cardBackground};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 1000;
  
  @media (max-width: 768px) {
    width: 90vw;
    height: 70vh;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
    border-radius: 16px 16px 0 0;
  }
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  color: white;
`;

const ChatTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  
  i {
    font-size: 1.2rem;
  }
`;

const ChatToggle = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: background 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ChatMessages = styled.div`
  height: 350px;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 3px;
  }
`;

const Message = styled(motion.div)`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  
  &.user-message {
    flex-direction: row-reverse;
    
    .message-content {
      background: ${props => props.theme.colors.primary};
      color: white;
      border-radius: 16px 16px 4px 16px;
    }
  }
  
  &.agent-message {
    .message-content {
      background: rgba(255, 255, 255, 0.1);
      color: ${props => props.theme.colors.text};
      border-radius: 16px 16px 16px 4px;
    }
  }
`;

const MessageAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  flex-shrink: 0;
  
  &.agent-avatar {
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
    color: white;
  }
  
  &.user-avatar {
    background: ${props => props.theme.colors.success};
    color: white;
  }
`;

const MessageContent = styled.div`
  max-width: 75%;
  padding: 0.75rem 1rem;
  line-height: 1.4;
  font-size: 0.9rem;
  
  .message-time {
    font-size: 0.75rem;
    opacity: 0.7;
    margin-top: 0.5rem;
    display: block;
  }
`;

const ChatInput = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  input {
    flex: 1;
    padding: 0.75rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    color: ${props => props.theme.colors.text};
    border-radius: 20px;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
    
    &::placeholder {
      color: ${props => props.theme.colors.textSecondary};
    }
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
    }
  }
  
  button {
    background: ${props => props.theme.colors.primary};
    border: none;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: ${props => props.theme.colors.primaryDark};
      transform: scale(1.05);
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

const FAB = styled(motion.button)`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  z-index: 999;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  color: ${props => props.theme.colors.textSecondary};
  
  .typing-dots {
    display: flex;
    gap: 0.25rem;
    
    span {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${props => props.theme.colors.primary};
      animation: typing 1.4s infinite;
      
      &:nth-child(2) {
        animation-delay: 0.2s;
      }
      
      &:nth-child(3) {
        animation-delay: 0.4s;
      }
    }
  }
  
  @keyframes typing {
    0%, 60%, 100% {
      opacity: 0.3;
      transform: scale(0.8);
    }
    30% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'agent',
      content: "Hello! I'm your NeuroCode AI agent. I'm here to help you optimize your coding experience and well-being. How can I assist you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses = [
    "Based on your recent coding patterns, I notice you've been working for 2.5 hours straight. Consider taking a short break to maintain focus.",
    "Your code complexity has increased by 15% today. Would you like me to suggest some refactoring opportunities?",
    "I see you're working on authentication features. Here are some wellness tips for handling complex logic: take breaks every 45 minutes and stay hydrated.",
    "Your stress indicators suggest high cognitive load. Try the Pomodoro technique - 25 minutes of focused work followed by a 5-minute break.",
    "Great job maintaining consistent commit patterns! Your flow state indicators look excellent today.",
    "I notice some repeated code patterns. Would you like me to help optimize your workflow?",
    "Your typing rhythm suggests you're in a good focus state. Keep up the excellent work!",
    "Based on your current stress levels, I recommend a 10-minute mindfulness break. Shall I set a reminder?"
  ];

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const randomResponse = predefinedResponses[Math.floor(Math.random() * predefinedResponses.length)];
      const agentMessage = {
        id: messages.length + 2,
        type: 'agent',
        content: randomResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <ChatContainer
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
          >
            <ChatHeader>
              <ChatTitle>
                <i className="fas fa-robot"></i>
                <span>NeuroCode AI Agent</span>
              </ChatTitle>
              <ChatToggle onClick={() => setIsOpen(false)}>
                <i className="fas fa-minus"></i>
              </ChatToggle>
            </ChatHeader>

            <ChatMessages>
              {messages.map((message) => (
                <Message
                  key={message.id}
                  className={`${message.type}-message`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MessageAvatar className={`${message.type}-avatar`}>
                    {message.type === 'agent' ? (
                      <i className="fas fa-robot"></i>
                    ) : (
                      <i className="fas fa-user"></i>
                    )}
                  </MessageAvatar>
                  <MessageContent className="message-content">
                    <p>{message.content}</p>
                    <span className="message-time">{message.time}</span>
                  </MessageContent>
                </Message>
              ))}
              
              {isTyping && (
                <Message className="agent-message">
                  <MessageAvatar className="agent-avatar">
                    <i className="fas fa-robot"></i>
                  </MessageAvatar>
                  <TypingIndicator>
                    <span>AI is typing</span>
                    <div className="typing-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </TypingIndicator>
                </Message>
              )}
              
              <div ref={messagesEndRef} />
            </ChatMessages>

            <ChatInput>
              <input
                type="text"
                placeholder="Ask me about your coding patterns..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button onClick={sendMessage} disabled={!inputValue.trim()}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </ChatInput>
          </ChatContainer>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <FAB
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <i className="fas fa-robot"></i>
          </FAB>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;
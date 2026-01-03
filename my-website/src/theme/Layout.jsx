import React, { useState } from 'react';
import OriginalLayout from '@theme-original/Layout';

// Search imports
import SearchBar from '@site/src/components/SearchBar/SearchBar';
import { SearchProvider } from '@site/src/contexts/SearchContext';
import '@site/src/css/search-styles.css';

// Chatbot imports
import '@site/src/components/RagChatbot/chat.css';
import ChatWidget from '@site/src/components/RagChatbot/ChatWidget';

// Custom Layout wrapper
const Layout = (props) => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  const closeChatbot = () => {
    setIsChatbotVisible(false);
  };

  return (
    <SearchProvider>
      <OriginalLayout {...props}>
        
        {/* 🔍 Search Bar */}
        <div className="search-bar-wrapper">
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              padding: '1rem 0',
              backgroundColor: 'var(--ifm-background-surface-color)',
              borderBottom: '1px solid var(--ifm-toc-border-color)',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '1200px',
                paddingLeft: '1rem',
                paddingRight: '1rem',
              }}
            >
              <SearchBar />
            </div>
          </div>
        </div>

        {/* 📄 Page Content */}
        {props.children}

        {/* 🤖 Floating RAG Chatbot */}
        <ChatWidget />

      </OriginalLayout>
    </SearchProvider>
  );
};

export default Layout;

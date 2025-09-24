import React, { useEffect, useRef, useState } from 'react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ElamAIChatbot({ anchor = 'top-right' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !hasShownWelcome) {
      setMessages([
        {
          id: Date.now().toString(),
          content: "👋 Hello! ",
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
      setHasShownWelcome(true);
    }
  }, [isOpen, hasShownWelcome]);

  const sendMessage = async (content) => {
    if (!content.trim()) return;
    const userMessage = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    try {
      const response = await fetch('https://n8n.elamai.in/webhook/89d0119c-ca35-4f10-ae9c-6282e5a3f362/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: content }),
      });
      if (!response.ok) throw new Error('Failed to get response');
      const data = await response.json();
      const botMessage = {
        id: (Date.now() + 1).toString(),
        content: data.output || "I'm sorry, I couldn't process your request right now. Please try again later.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  const formatTime = (date) => new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const anchorClasses = anchor === 'top-right' ? 'top-4 right-4' : 'bottom-4 right-4';

  return (
    <div className={cn('fixed z-[1000] group', anchorClasses)}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-black text-white hover:bg-gray-800 shadow-lg transition-all duration-200 hover:scale-105 flex items-center justify-center"
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          /* X icon */
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 6-12 12"/><path d="m6 6 12 12"/></svg>
        ) : (
          /* Message icon */
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={cn(
            'absolute w-80 sm:w-96',
            anchor === 'top-right' ? 'right-0 mt-3' : 'right-0 bottom-full mb-3'
          )}
        > 
          <div className="rounded-xl border-2 border-gray-200 shadow-2xl bg-white overflow-hidden">
            <div className="bg-black text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                <h3 className="font-semibold">ElamAI</h3>
              </div>
              <span className="text-xs text-gray-300">AI Assistant • Online</span>
            </div>
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((m) => (
                <div key={m.id} className={cn('flex items-start gap-2', m.sender === 'user' ? 'justify-end' : 'justify-start')}>
                  {m.sender === 'bot' && (
                    <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                    </div>
                  )}
                  <div className={cn('max-w-xs px-3 py-2 rounded-lg text-sm', m.sender === 'user' ? 'bg-black text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-900 rounded-bl-none')}>
                    <p className="whitespace-pre-wrap break-words">{m.content}</p>
                    <p className={cn('text-xs mt-1', m.sender === 'user' ? 'text-gray-300' : 'text-gray-500')}>{formatTime(m.timestamp)}</p>
                  </div>
                  {m.sender === 'user' && (
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                      <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg rounded-bl-none px-3 py-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="p-3 border-t bg-white">
              <div className="flex gap-2">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 h-9 rounded-md border border-gray-300 px-3 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                <button type="submit" disabled={isLoading || !inputValue.trim()} className="h-9 w-9 rounded-md bg-black text-white hover:bg-gray-800 flex items-center justify-center">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! How can I help with your event or catering questions?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  useEffect(() => {
    let timer;
    if (!isOpen) {
      setShowButton(false);
      timer = setTimeout(() => {
        setShowButton(true);
      }, 2000);
    } else {
      setShowButton(false);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  async function sendMessage() {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();

      setMessages([...newMessages, { from: "bot", text: data.reply }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { from: "bot", text: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div
      className="fixed bottom-4 right-4 z-50 font-sans pointer-events-auto"
      style={{ fontSize: "0.875rem" }}
    >
      <AnimatePresence mode="wait">
        {!isOpen && showButton && (
          <motion.button
            key="chat-bubble"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open chat"
            className="rounded-full bg-white text-[var(--color-primary)] shadow-md px-5 py-3 font-semibold"
            style={{ boxShadow: "var(--shadow-custom)" }}
          >
            💬 Chat
          </motion.button>
        )}

        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col rounded-md overflow-hidden"
            style={{
              backgroundColor: "#e8afb0",
              boxShadow: "var(--shadow-custom)",
              color: "#1f2937",
              height: 420,
              width: 320,
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-white text-gray-800">
              <span className="font-semibold select-none">Ask us anything</span>
              <button
                aria-label="Close chat"
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold leading-none"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 px-4 py-3 overflow-y-auto space-y-2">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.from === "bot" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-md p-2 whitespace-pre-wrap text-sm ${
                      msg.from === "bot"
                        ? "bg-white text-gray-800"
                        : "bg-gray-900 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="italic text-sm text-gray-700">Typing...</div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-300 bg-white">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={2}
                placeholder="Type your question..."
                className="w-full rounded-md p-2 resize-none text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="mt-2 w-full rounded-md bg-[var(--color-primary)] text-white py-2 font-semibold hover:bg-[#d3999e] transition-colors disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

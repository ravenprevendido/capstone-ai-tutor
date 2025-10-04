"use client";
import React, { useState, useRef, useEffect } from "react";

const AI_Tutor = () => {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "Hello Alex! I'm your AI Tutor. You can ask me anything about your courses. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");

  const bottomRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  // Smarter fake AI
  const fakeAIResponse = (question) => {
    const lower = question.toLowerCase();

    if (lower.includes("javascript")) {
      return `JavaScript is a versatile, high-level programming language used primarily for web development. It allows you to add interactivity to websites, work with APIs, and build dynamic content. It's also used in server-side development via Node.js.`;
    }

    if (lower.includes("react")) {
      return `React is a JavaScript library for building user interfaces, especially single-page applications. It uses a component-based architecture and a virtual DOM to efficiently update and render UI.`;
    }
    
    if (lower.includes("html")) {
      return `HTML (HyperText Markup Language) is the standard language for creating the structure of web pages. It defines elements like headings, paragraphs, links, and images.`;
    }

    if (lower.includes("css")) {
      return `CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, positioning, animations, and responsiveness.`;
    }

    if (lower.includes("node")) {
      return `Node.js is a JavaScript runtime built on Chrome's V8 engine. It lets you run JavaScript on the server side, and it's widely used for building back-end services and APIs.`;
    }

    if (lower.includes("api")) {
      return `An API (Application Programming Interface) allows different software applications to communicate with each other. In web development, APIs often deliver data in formats like JSON.`;
    }

    if (lower.includes("git")) {
      return `Git is a version control system that tracks changes in your codebase. It lets developers collaborate, revert to previous versions, and manage branches efficiently.`;
    }
    return `That's a great question! While I don't have a specific answer preloaded, here's a general tip: try breaking your topic into smaller parts and researching each one. I'm here to help guide you. 😊`;
  };

  const handleSend = () => {
    if (!input.trim()) return;``

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      const aiReply = {
        role: "ai",
        content: fakeAIResponse(input),
      };
      setMessages((prev) => [...prev, aiReply]);
    }, 1200);
  };
  return (
    <div className="bg-[#0f172a] text-white min-h-screen px-4 py-8">
      <h2 className="text-xl font-semibold mb-6">AI Tutor</h2>

      <div className="bg-[#1e293b] p-6 rounded-md max-w-3xl mx-auto shadow-md">
        <p className="text-gray-400 text-sm mb-4">
          Your Personal AI Assistance For Learning
        </p>
        <div className="space-y-4 mb-6">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.role !== "user" && (
                <div className="flex-shrink-0 mr-2">
                  <div className="bg-green-500 rounded-full h-6 w-6 flex items-center justify-center text-black text-sm font-bold">
                    💬
                  </div>
                </div>
              )}
              <div
                className={`rounded-lg px-4 py-2 max-w-sm whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white"
                    : msg.role === "system"
                    ? "bg-gray-700 text-gray-300"
                    : "bg-gray-800 text-gray-100"
                }`}
              >
            
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={bottomRef}></div>
        </div>
        {/* Input Area */}
        <div className="flex items-center gap-2 mt-4">
          <input
            type="text"
            className="flex-1 bg-[#0f172a] border border-gray-600 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ask your question here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            onClick={handleSend}
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default AI_Tutor;
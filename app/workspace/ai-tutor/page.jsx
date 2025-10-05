"use client";
import { useState } from "react";
import { FaRobot, FaUser } from "react-icons/fa";

export default function AITutorPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello Alex! I'm your AI Tutor. You can ask me anything about your courses. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();

      if (data.text) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.text },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Sorry, I couldn’t generate an answer." },
        ]);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error connecting to AI service." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0D1117] px-4">
      <div className="w-full max-w-3xl bg-[#161B22] rounded-2xl shadow-2xl p-6 flex flex-col h-[80vh]">
        {/* Header */}
        <h1 className="text-[25px] font-semibold text-center text-white mb-5">
          Your Personal AI Assistance For Learning
        </h1>

        {/* Chat container */}
        <div className="flex-1 overflow-y-auto space-y-5 px-2 bg-[#0F1622] rounded-xl p-5">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-end gap-3 ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.role === "assistant" && (
                <FaRobot className="text-green-400 text-xl" />
              )}
              <div
                className={`px-4 py-3 rounded-2xl text-sm leading-relaxed max-w-[80%] break-words ${
                  msg.role === "assistant"
                    ? "bg-[#21262D] text-gray-100 text-left"
                    : "bg-[#238636] text-white text-right"
                }`}
              >
                {msg.content}
              </div>
              {msg.role === "user" && (
                <FaUser className="text-blue-400 text-xl" />
              )}
            </div>
          ))}

          {loading && (
            <div className="flex justify-start items-center gap-2 text-gray-400 text-sm animate-pulse">
              <FaRobot className="text-green-400" />
              <p>AI Tutor is thinking...</p>
            </div>
          )}
        </div>

        {/* Input */}
        <form
          onSubmit={sendMessage}
          className="mt-5 flex items-center gap-3 bg-[#0F1622] rounded-xl p-3 border border-[#30363D]"
        >
          <input
            type="text"
            placeholder="Ask your question here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none px-2"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[#238636] hover:bg-[#2EA043] px-4 py-2 rounded-lg transition-all duration-200 text-white font-semibold"
          >
            ➤
          </button>
        </form>
      </div>
    </div>
  );
}

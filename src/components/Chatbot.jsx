import React, { useState, useRef, useEffect } from "react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm Master Nalin's AI assistant. Feel free to ask me anything about his skills, projects, or experience! 🤖",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simple markdown-like formatter
  const formatMessage = (content) => {
    const lines = content.split("\n");
    const formattedLines = lines.map((line, index) => {
      // Handle headers
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-sm font-semibold mb-1 mt-2">
            {line.replace("### ", "")}
          </h3>
        );
      }
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="text-base font-bold mb-1 mt-2">
            {line.replace("## ", "")}
          </h2>
        );
      }
      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className="text-lg font-bold mb-2 mt-2">
            {line.replace("# ", "")}
          </h1>
        );
      }

      // Handle bullet points
      if (line.startsWith("- ")) {
        return (
          <div key={index} className="flex items-start mb-1">
            <span className="mr-2 mt-1">•</span>
            <span>
              {line
                .replace("- ", "")
                .replace(/\*\*(.*?)\*\*/g, (match, text) => text)}
            </span>
          </div>
        );
      }

      // Handle bold text in regular paragraphs
      if (line.trim() && !line.startsWith("#") && !line.startsWith("-")) {
        const parts = line.split(/(\*\*.*?\*\*)/g);
        const formattedParts = parts.map((part, partIndex) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={partIndex} className="font-semibold">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return part;
        });

        return (
          <p key={index} className="mb-2">
            {formattedParts}
          </p>
        );
      }

      // Empty lines for spacing
      if (!line.trim()) {
        return <div key={index} className="h-1"></div>;
      }

      return null;
    });

    return formattedLines.filter((line) => line !== null);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          history: messages,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-accent-yellow-light to-accent-rose rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label={
          isOpen ? "Close chat" : "Open chat with Nalin's AI assistant"
        }
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <img
            src="/secondavatar.png"
            alt="Nalin's Avatar"
            className="h-14 w-14 rounded-full object-cover"
          />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-light-card dark:bg-dark-card border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-accent-cyan to-accent-rose p-4 text-white">
            <h2 className="font-semibold text-lg">Nalin's AI Assistant</h2>
            <p className="text-sm opacity-90">Ask me anything about him!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-accent-cyan to-accent-rose text-white"
                      : "bg-light-accent dark:bg-dark-accent text-primarytext-light dark:text-primarytext-dark"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div className="text-sm">{formatMessage(msg.content)}</div>
                  ) : (
                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-light-accent dark:bg-dark-accent rounded-2xl px-4 py-2">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-accent-cyan rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-accent-cyan rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-accent-cyan rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-zinc-200 dark:border-zinc-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about skills, projects..."
                className="flex-1 px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-600 bg-light-bg dark:bg-dark-bg text-primarytext-light dark:text-primarytext-dark focus:outline-none focus:ring-2 focus:ring-accent-cyan"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="px-4 py-2 bg-gradient-to-r from-accent-cyan to-accent-rose text-white rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;

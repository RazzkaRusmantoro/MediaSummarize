import { useState, FormEvent, useEffect } from 'react'; // Add useEffect
import assistantIcon from '@/assets/images/bot.jpg';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatboxProps {
  summary: string;
}

// Function to parse bold text
const parseBoldText = (text: string): string => {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
};

// Function to format line breaks
const formatLineBreaks = (text: string): string => {
  return text.replace(/\n/g, '<br />');
};

// Combine both functions
const formatResponse = (text: string): string => {
  return formatLineBreaks(parseBoldText(text));
};

const Chatbox: React.FC<ChatboxProps> = ({ summary }) => {
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const initialMessage: Message = {
      role: 'assistant',
      content: "Hey, I'm the AI assistant here! My name is Medius. Feel free to ask me any questions you may have about the summary!",
    };
    setChatMessages([initialMessage]);
  }, []);

  const handleChatSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessage: Message = { role: 'user', content: userInput };
    setChatMessages((prevMessages) => [...prevMessages, newMessage]);
    setUserInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/proxy/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ summary, message: userInput }),
      });

      const data = await response.json();
      if (response.ok) {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { role: 'assistant', content: data.response },
        ]);
      } else {
        console.error(data.error);
        alert('Failed to get response from AI');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 p-6 bg-white rounded-lg max-w-[90%] w-full text-left">
      <h2 className="text-2xl font-bold mb-4 text-black">Chat with our AI assistant, Medius!</h2>
      <div className="h-64 overflow-y-auto mb-4">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-2`}
          >
            {msg.role === 'assistant' && (
              <div className="w-8 h-8 flex items-center justify-center mr-2">
                <img
                  src={assistantIcon.src}
                  alt="Assistant Icon"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
            )}
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
              }`}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: msg.role === 'assistant' ? formatResponse(msg.content) : msg.content,
                }}
              />
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-end mb-2">
            <div className="max-w-[70%] p-2 text-sm text-gray-500">
              Sending...
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleChatSubmit} className="flex gap-2">
        <input
          type="text"
          className="flex-1 p-3 rounded-lg text-black outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-gray-300"
          placeholder="Ask a question..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={loading}
        />
        <button
          type="submit"
          className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          disabled={loading}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbox;
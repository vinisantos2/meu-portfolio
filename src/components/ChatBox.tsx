// components/ChatBox.tsx
import { useState } from 'react';

export default function ChatBox() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ text: string; from: 'user' | 'bot' }[]>([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { text: userMessage, from: 'user' }]);
    setInput('');

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await res.json();
    setMessages(prev => [...prev, { text: data.response, from: 'bot' }]);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg z-50 cursor-pointer"
      >
        {open ? 'Fechar IA' : '💬 Fale com a IA'}
      </button>

      {open && (
        <div className="fixed bottom-20 right-4 w-80 max-h-[70vh] bg-white border border-gray-300 rounded shadow-lg flex flex-col z-40">
          <div className="p-3 overflow-y-auto flex-1">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-2 text-sm ${msg.from === 'user' ? 'text-right text-blue-600' : 'text-left text-gray-800'}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex border-t p-2">
            <input
              type="text"
              className="flex-1 px-2 py-1 border rounded text-sm"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Digite sua dúvida..."
            />
            <button onClick={sendMessage} className="ml-2 text-sm text-white bg-blue-600 px-3 py-1 rounded">
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

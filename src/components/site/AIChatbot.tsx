import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot", text: string }[]>([
    { role: "bot", text: "Salom! Men Umidjon Agency ning AI yordamchisiman. Sizga qanday yordam bera olaman?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsgs = [...messages, { role: "user" as const, text: input }];
    setMessages(newMsgs);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages([...newMsgs, { 
        role: "bot", 
        text: "Kechirasiz, men hozircha faqat vizual qobiqman. Ammo tez orada to'liq ishga tushaman! Raqamingizni qoldirsangiz, menejerimiz sizga aloqaga chiqadi." 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="flex h-[400px] w-[320px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
          <div className="flex items-center justify-between bg-primary p-4 text-primary-foreground">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              <span className="font-semibold">AI Yordamchi</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="rounded-full p-1 hover:bg-primary-foreground/20">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-secondary/20">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                  m.role === "user" 
                    ? "bg-primary text-primary-foreground rounded-tr-sm" 
                    : "bg-background border border-border text-foreground rounded-tl-sm"
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-border bg-background p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Xabaringizni yozing..."
              className="flex-1 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm focus:border-primary focus:outline-none"
            />
            <button type="submit" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow transition-transform hover:scale-110"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

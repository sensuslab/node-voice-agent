export function ChatHistory() {
  const messages = [
    { text: "Hi. Yvnins does a ooting whoxt in presentation about you.", time: "2m ago" },
    { text: "We're fogging that I collaborate vestites in parcon message.", time: "5m ago" },
    { text: "Why is immisnight you can have to us to keep otling your message?", time: "8m ago" },
  ];

  return (
    <div className="space-y-3">
      {messages.map((msg, i) => (
        <div key={i} className="text-sm text-text-secondary leading-relaxed">
          <p>{msg.text}</p>
        </div>
      ))}
    </div>
  );
}

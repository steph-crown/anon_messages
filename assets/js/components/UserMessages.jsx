import React from "react";

const dummyMessages = [
  {
    content:
      "Sometimes it's easier to express yourself when you don't have to worry about who's saying it. Anyone else feel the same way?",
    createdAt: "2024-03-01T14:00:00Z",
  },
  {
    content: "I've been thinking about you. Hope you're doing well.",
    createdAt: "2024-02-29T14:00:00Z",
  },
];

const UserMessages = () => {
  const [messages, setMessages] = [];
  return (
    <div className="bg-[]">
      <h1>Messages for you</h1>
      <ul>
        {dummyMessages.map((message, index) => (
          <li key={index}>
            <p>{message.content}</p>
            <small>{formatTime(message.createdAt)}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserMessages;

const formatTime = (dateTimeString) => {
  if (!dateTimeString) return "";

  const dateTime = new Date(dateTimeString);
  return dateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

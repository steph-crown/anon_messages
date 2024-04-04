import React, { useState } from "react";

const UserMessages = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const shareableLink = `http://localhost:3000/send_messages/${userId}`;

  return (
    <div className="border-solid border border-[#E8E8E8] px-8 py-8 rounded-lg h-full flex flex-col justify-between">
      <div className="h-[calc(100%_-_120px)]">
        <h1 className="text-black text-2xl font-semibold text-center mb-4">
          Messages for you
        </h1>

        <ul className="flex flex-col gap-y-4  overflow-y-auto h-[calc(100%_-_72px)]">
          {messages.map((message, index) => (
            <li
              key={message.content}
              className="bg-[#FAFAFA] border-[#E8E8E8] border border-solid px-6 py-6 rounded-lg"
            >
              <p className="text-base text-black">{message.content}</p>
              <small className="block text-right mt-6">
                {" "}
                - Anonymous [{formatTime(message.createdAt)}]
              </small>
            </li>
          ))}

          {!messages.length && (
            <li className="h-full font-medium flex items-center justify-center">
              You don't have any messages yet
            </li>
          )}
        </ul>
      </div>

      <div>
        <p className="text-base">
          Share this link to let people send you candid thoughts, questions, or
          suggestions. You won't know who it's from!
        </p>
        <input
          type="text"
          className="border-solid border border-[#E8E8E8] px-4 py-4 rounded-lg w-full mt-2 text-center font-medium"
          value={shareableLink}
          readOnly
        />
      </div>
    </div>
  );
};

export default UserMessages;

const formatTime = (dateTimeString) => {
  if (!dateTimeString) return "";

  const dateTime = new Date(dateTimeString);
  return dateTime.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

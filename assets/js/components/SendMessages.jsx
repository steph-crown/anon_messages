import React, { useState } from "react";

const SendMessages = ({ recipientEmail, recipientId }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Message submitted:", message);
  };

  return (
    <form
      className="border-solid border border-[#E8E8E8] px-8 py-8 rounded-lg h-full flex flex-col justify-between"
      onSubmit={handleSubmit}
    >
      <h1 className="text-black text-2xl font-semibold text-center mb-4">
        Got something to say? Don't be shy!
      </h1>

      <p className="text-base mt-3 mb-14">
        Send {recipientEmail} a quick, completely anonymous message. It could be
        a compliment, a question, or even a friendly dare.
      </p>

      <textarea className="block w-full rounded-lg text-zinc-900 focus:ring-0 sm:text-sm sm:leading-6 min-h-[6rem] "></textarea>

      <button className="rounded-lg bg-zinc-900 hover:bg-zinc-700 py-2 px-3 text-sm font-semibold leading-6 text-white active:text-white/80 mt-5">
        Send message
      </button>
    </form>
  );
};

export default SendMessages;

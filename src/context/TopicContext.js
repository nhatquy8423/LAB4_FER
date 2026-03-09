import React, { createContext, useState } from "react";

export const TopicContext = createContext();

export const TopicProvider = ({ children }) => {
  const [topic, setTopic] = useState("users");

  return (
    <TopicContext.Provider value={{ topic, setTopic }}>
      {children}
    </TopicContext.Provider>
  );
};

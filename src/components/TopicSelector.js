import React, { useContext } from "react";
import { TopicContext } from "../context/TopicContext";
import "../App.css";

const TopicSelector = () => {
  const { topic, setTopic } = useContext(TopicContext);

  const handleChange = (e) => {
    setTopic(e.target.value);
  };

  const styleActive = { backgroundColor: "#007bff", color: "white" };

  return (
    <div className="selector_container">
      {["posts", "albums", "users"].map((t) => (
        <button
          className="btn"
          key={t}
          onClick={() => setTopic(t)}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            border: "none",
            cursor: "pointer",
            ...(topic === t ? styleActive : { backgroundColor: "#f0f0f0" }),
          }}
        >
          {t}
        </button>
      ))}
    </div>
  );
};

export default TopicSelector;

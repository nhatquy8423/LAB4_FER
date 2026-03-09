import React, { useContext } from "react";
import { TopicContext } from "../context/TopicContext";

const SummaryBar = ({ count }) => {
  const { topic } = useContext(TopicContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        padding: "10px",
        marginBottom: "20px",
        fontWeight: "bold",
      }}
    >
      <span>Topic: {topic}</span>

      <span>Total records: {count}</span>
    </div>
  );
};

export default SummaryBar;

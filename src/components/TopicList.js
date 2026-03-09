import React from "react";

const TopicList = ({ data }) => {
  return (
    <div className="list-container">
      {data.map((item, index) => (
        <div key={item.id} style={{ marginBottom: "10px", padding: "5px 0" }}>
          <strong>{index + 1} — </strong>
          {item.name ? item.name : item.title}
        </div>
      ))}
    </div>
  );
};

export default TopicList;

import React, { useState, useEffect, useContext } from "react";
import { TopicProvider, TopicContext } from "./context/TopicContext";
import TopicSelector from "./components/TopicSelector";
import TopicList from "./components/TopicList";
import SummaryBar from "./components/SummaryBar";
import "./App.css";

const MainContent = () => {
  const { topic } = useContext(TopicContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!topic) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${topic}`,
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [topic]);

  return (
    <div className="container">
      <h1>Topic Explorer</h1>
      <TopicSelector />

      <SummaryBar count={data.length} />

      <TopicList data={data} />
    </div>
  );
};

function App() {
  return (
    <TopicProvider>
      <MainContent />
    </TopicProvider>
  );
}

export default App;

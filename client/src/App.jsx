import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Connecting...");

  useEffect(() => {
    fetch("http://localhost:3000/api/health")
      .then((response) => response.json())
      .then((data) => setMessage(data.status))
      .catch(() => setMessage("Could not connect to backend"));
  }, []);

  return (
    <main>
      <h1>card-call</h1>
      <p>{message}</p>
    </main>
  );
}

export default App;

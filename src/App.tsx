import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrendingNow from "./components/Movies";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <TrendingNow />
    </>
  );
}

export default App;

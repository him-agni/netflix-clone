import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Movies from "./components/Movies";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Movies />
    </>
  );
}

export default App;

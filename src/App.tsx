import React from "react";
import HeroSection from "./components/ui/HeroSection";
import History from "./pages/History";
import Statistics from "./pages/Statistics";
import Applications from "./pages/Applications";

function App() {
  return (
    <div>
      <HeroSection />
      <History />
      <Statistics />
      <Applications />
    </div>
  );
}

export default App;

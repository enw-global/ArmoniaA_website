import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";

import Navbar from "./components/Navbar";

import { InfoProvider } from "./context/InfoContext";
import ShowInfo from "./utils/ShowInfo";

import MouseFollowCountdown from "./components/MouseFollowCountdown";

function App() {
  // TODO: Store data in a database per project
  const target = new Date("2025-06-02T00:00:00");
  return (
    <InfoProvider>
      <Navbar />
      <MouseFollowCountdown targetDate={target} />
      <Hero targetDate={target} />
      <ShowInfo />
      <Footer />
    </InfoProvider>
  );
}

export default App;

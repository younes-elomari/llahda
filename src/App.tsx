import Hero from "./_Components/main/Hero";
import LatestNews from "./_Components/main/LatestNews";
import NavBar from "./_Components/main/NavBar";
import PopularNews from "./_Components/main/PopularNews";

function App() {
  return (
    <main className="px-5 md:px-10">
      <NavBar />
      <Hero />
      <LatestNews />
      <PopularNews />
    </main>
  );
}

export default App;

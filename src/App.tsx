import Footer from "./_Components/main/Footer";
import Hero from "./_Components/main/Hero";
import LatestNews from "./_Components/main/LatestNews";
import NavBar from "./_Components/main/NavBar";
import PopularNews from "./_Components/main/PopularNews";

function App() {
  return (
    <main className="px-5 md:px-10 max-w-[1920px] m-auto">
      <NavBar />
      <Hero />
      <LatestNews />
      <PopularNews />
      <Footer />
    </main>
  );
}

export default App;

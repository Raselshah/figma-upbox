import "./App.css";
import Navbar from "./Component/Home/Navbar/Navbar";
import Banner from "./Component/Home/Banner/Banner";
import Plan from "./Component/Home/Plan/Plan";
import Works from "./Component/Home/Works/Works";
import Social from "./Component/Home/Social/Social";
import Footer from "./Component/Home/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Plan />
      <Works />
      <Social />
      <Footer />
    </div>
  );
}

export default App;

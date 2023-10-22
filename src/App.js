import Banner from "./components/Banner";
import Body1 from "./components/Body1";
import Footer from "./components/Footer";
import TopHeader from "./components/TopHeader";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="App h-auto">
      <TopHeader/>
      <TopNav/>
      <Banner/>
      <Body1/>
      <Footer/>
    </div>
  );
}

export default App;

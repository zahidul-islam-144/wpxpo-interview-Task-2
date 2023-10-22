import Banner from "./components/Banner";
import Body1 from "./components/Body1";
import TopHeader from "./components/TopHeader";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="App h-auto">
      <TopHeader/>
      <TopNav/>
      <Banner/>
      <Body1/>
    </div>
  );
}

export default App;

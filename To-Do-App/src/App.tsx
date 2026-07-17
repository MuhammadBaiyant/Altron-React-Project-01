import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen bg-yellow-500">
      <div className="flex-1">
        <Header />
      </div>
      <div>
        Bodyyyyy tea
      </div>
      <div className="">
        <Footer />
      </div>

    </div>
  );
}

export default App;

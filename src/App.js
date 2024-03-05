import logo from "./logo.svg";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  return (
    <div className="App">
      <AudioPlayer />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;

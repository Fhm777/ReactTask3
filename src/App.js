import './App.css';
import { ColorPicker } from './Components/ColorPicker';

function App() {
  return (
    <div className="App">
      <h1>Color</h1>
      <ColorPicker colors={["red", "black", "lightgreen", "blue", "yellow", "purple", "pink", "green", "violet", "lightgrey", "royalblue", "white", "grey", "orange", "cyan", "brown", "darkgreen"]}></ColorPicker>
    </div>
  );
}

export default App;

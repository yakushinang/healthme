import logo from './logo.svg';
import './App.css';
import SelectTable from './SelectTable/SelectTable'

function App() {
  return (
    <div className="App">
      <div className="header"> Health Me</div>
      <h3>Make Your Purchases.</h3>
      <SelectTable></SelectTable>
      <div className="devName"><span>Angelika Yakushin</span></div>
    </div>
  );
}

export default App;


import './App.css';

function App() {
  const operatingSystem = ["Android", "Blakberry" ,"iPhone", "Windows Phone"]
  const mobile = ["Samsung" ,"HTC" ,"Micromax" ,"Apple"]
  return (
    <div className="App">
     <h1>Mobile operating sytem</h1>
      <ul> 
        {operatingSystem.map((el) => (
          <li>{ el}</li>
        ))}
      </ul>
      <h1>Mobile Manufacturers</h1>
      <ul> 
        {mobile.map((el) => (
          <li>{ el}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

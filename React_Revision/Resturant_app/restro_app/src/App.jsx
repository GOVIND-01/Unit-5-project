import './App.css';
import { AddResturant } from './RestaurantDetails/AddResturant/AddResturant';
import { ResturantDetails } from './RestaurantDetails/RestaurantDetails';

function App() {
  return (
    <div className="App">
      <ResturantDetails/>
      <AddResturant/>
    </div>
  );
}

export default App;

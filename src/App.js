import coffeeBeans from "./mockData/coffeeBeans.json";
import SelectedCoffeeBean from './components/SelectedCoffeeBean'
import SetCoffeeBean from './components/SetCoffeeBean'
import CoffeeContext from './context/CoffeeContext'


function App() {
  return (
    <>
      <SelectedCoffeeBean/>
      <SetCoffeeBean coffeeBeans={coffeeBeans}/>
    </>
  );
}

export default App;

import { useCoffee }from '../context/CoffeeContext'
const SelectedCoffeeBean = () => {
const {coffeeBean} = useCoffee()
console.log(coffeeBean)
  return (
    <div class='selected-coffee'>
      <h2>{coffeeBean.name}</h2>
    </div>
  );
}

export default SelectedCoffeeBean;

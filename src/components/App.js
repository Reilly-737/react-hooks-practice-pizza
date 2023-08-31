import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [pizzas, setPizzas] = useState([])

  useEffect (() => {
    fetch("http://localhost:3001/pizzas")
    .then((r) => r.json())
    .then((data) =>{
      setPizzas(data);
    });
  }, []);

  const handlePizzaUpdate = (updatedPizza) => {
    const updatedPizzas = pizzas.map((pizza) => 
    pizza.id === updatedPizza.id ? updatedPizza : pizza
    );
    setPizzas(updatedPizzas);
    setSelectedPizza(null);
  }
  return (
    <>
      <Header />
      <PizzaForm selectedPizza={selectedPizza} onPizzaUpdate={handlePizzaUpdate}/>
      <PizzaList pizzas={pizzas} setSelectedPizza={setSelectedPizza} />
    </>
  );
}

export default App;

import React, {useState, useEffect} from "react";
import Pizza from "./Pizza";
import PizzaForm from "./PizzaForm";

function PizzaList() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPizza, setSelectedPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then((r) => r.json())
    .then((data) => {
      setPizzas(data)
      setLoading(false);
    })
  }, [])
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td>Loading...</td>
            </tr>
          ) : (
            pizzas.map((pizza) => (
            <Pizza
             key={pizza.id}
              pizza={pizza} 
              onSelectPizza={() => setSelectedPizza(pizza)}
              setSelectedPizza={setSelectedPizza}
              />
            ))
          )}
        </tbody>
      </table>
      <PizzaForm selectedPizza={selectedPizza} />
    </div>
  );
}

export default PizzaList;

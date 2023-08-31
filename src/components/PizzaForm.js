import React, {useEffect, useState} from "react";

function PizzaForm({selectedPizza, onPizzaUpdate}) {
  const [topping, setTopping] = useState("");
  const [size, setSize] = useState("");
  const [vegetarian, setVegetarian] = useState(false)

  useEffect(() => {
    if (selectedPizza) {
      setTopping(selectedPizza.topping);
      setSize(selectedPizza.size);
      setVegetarian(selectedPizza.vegetarian)
    }
  }, [selectedPizza])

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedPizza ={
      id: selectedPizza.id,
      topping,
      size,
      vegetarian,
    };
    
    fetch(`http://localhost:3001/pizzas/${selectedPizza.id}`, {
      method: "PATCH",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPizza)
    })
    .then((r) => r.json())
    .then((data) => {
      onPizzaUpdate(data);
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={(e) => setTopping(e.target.value)}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian}
              onChange={() => setVegetarian(!vegetarian)}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
              onChange={() => setVegetarian(!vegetarian)}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;

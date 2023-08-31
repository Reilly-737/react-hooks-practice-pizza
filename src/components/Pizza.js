import React from "react";

function Pizza({pizza, onSelectPizza, setSelectedPizza}) {
  const {topping, size, vegetarian} = pizza;
 
  const handleEditClick = () => {
    setSelectedPizza(pizza);
  }
  
  const onSelectAndEditPizza = () => {
    handleEditClick();
    onSelectPizza();
  };
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button 
        type="button" 
        className="btn btn-primary"
        onClick={onSelectAndEditPizza}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;

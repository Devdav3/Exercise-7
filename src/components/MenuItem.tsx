import { useContext } from "react";
import OrderContext from "../Context/OrderContext";
import Item from "../models/Items-model";


export default function MenuItem({ item }: { item: Item }) {
  const { order, addItem, removeItem } = useContext(OrderContext);
  return (
    <div className="MenuItem">
      <li>
        <p>Name: {item.name}</p>
        <p>Description: {item.description}</p>
        <p>Calories: {item.calories}</p>
        <p>price: {item.price}</p>
        <p>{item.vegetarian === true ? "Vegetarian" : "Not Vegetarian"}</p>
        <button
          onClick={() => {
            addItem(item);
          }}
        >
          Add To Order
        </button>
        {order.some((menuItem) => menuItem.id === item.id) && (
          <button onClick={() => removeItem(item.id)}>Remove from Order</button>
        )}
      </li>
    </div>
  );
}

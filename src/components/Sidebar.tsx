import { useContext } from "react";
import OrderContext from "../Context/OrderContext";
import "./Sidebar.css";

export default function Sidebar() {
  const { order } = useContext(OrderContext);

  let total = 0;
//   for (let i = 0; i < order.length; i++) {
//   total += order[i].price;
  
// }
order.map((item) => {total += item.price})

  return ( 
    <div className="Side">
      <ol>
        {order.map(item => <li key={item.id}> {item.name} - ${item.price}</li>)}
        <p>Total: ${total}</p> 
      </ol>
    </div>
   );
}
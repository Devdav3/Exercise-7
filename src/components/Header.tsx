import './Header.css';
import OrderContext from '../Context/OrderContext';
import { useContext } from 'react';

export default function Header() {
  const { order } = useContext(OrderContext);
  return ( 
    <header>
      <h1> Sunny Side Up </h1>
        <p> Order Count: {order.length} </p>
    </header>

    // put .length because its a array and your pushing all the items
   );
}


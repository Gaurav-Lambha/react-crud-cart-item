
import './App.css';
import InventoryGrid from "./inventory";
import CartSummary from "./cartSummary";
import CartDetails from './cartDetails';
import { useState } from 'react';
let inventoryList = [
  { id: 1, name: "Laptop", quantity: 10, weight: 20, price: 1000 },
  { id: 2, name: "iPhone", quantity: 15, weight: 30, price: 999 },
  { id: 3, name: "Headphones", quantity: 20, weight: 40, price: 100 },
]
function App() {
  const [cartData, setCartData] = useState([])
  const [inventorys, SetInventory] = useState(inventoryList);

  const onAddToCart = (inventory) => {
    updateInventory(inventory);
    updateCart(inventory);
  }

  const updateInventory = (inventory) => {
    const newInventory = inventorys.map(item => {
      let quantity = item.quantity
      if (item.id === inventory.id) {
        quantity = quantity - 1;
      }
      return {
        ...item,
        ...{ quantity: quantity }
      }
    })

    SetInventory(newInventory)
  }

  const updateCart = (inventory) => {
    const index = cartData.findIndex(e => e.id === inventory.id);
    if (index !== -1) {
      cartData[index]['quantity'] += inventory.quantity;
      cartData[index]['price'] += inventory.price;
    } else {
      cartData.push(inventory);
    }
    setCartData([...cartData]);
  }




  return (
    <div className="App">      
      <InventoryGrid inventoryList={inventorys} addToCart={onAddToCart} />
      {cartData && cartData.length ? <CartSummary data={cartData} /> : ''}
      {cartData && cartData.length ? <CartDetails data={cartData} /> : ''}
    </div>
  );
}

export default App;

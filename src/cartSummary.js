import { useEffect, useState } from "react";

const CartSummary = (props) => {
    const {data} = props;
    const [totalQuanity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        console.log('Item Quantity', data);
       if(data && data.length) {
       console.log('Item Quantity', data);
        let totalQuantity = 0;
        let totalPrice = 0;
        data.forEach(element => {
            totalPrice+=element.price;
            totalQuantity+=element.quantity;
        });

        setTotalQuantity(totalQuantity);
        setTotalPrice(totalPrice);
       }
    }, [data])
    return <div className="gridBorder">
        <h2>Cart Summary</h2>
        <div>
            <label>Total item quantity</label> : {totalQuanity} <br/>
            <label>Total price of all items</label> : {totalPrice}
        </div>
    </div>
}

export default CartSummary


// ## CartSummary
// - Summary of cart that shows
//     - Total item quantity
//     - Total price of all items

// Example:
//     - Total items: 4
//     - Total price: $1300

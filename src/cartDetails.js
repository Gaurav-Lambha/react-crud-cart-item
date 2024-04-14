import { useEffect, useState } from "react";

const CartDetails = (props) => {
    const { data } = props;
    const [cartDetailsData, setCartDetailsData] = useState([]);

    useEffect(() => {
        setCartDetailsData(data);
    }, [data]);

   
    return <div className="gridBorder">
        <h2>Cart Details</h2>
        {cartDetailsData.map((item, i) => {
            return <div key={`cart-div-${i}`}>
                <label>Product name</label> : {item?.name} <br />
                <label>Product quantity</label> : {item?.quantity}               
            </div> 
        })}

    </div>
}

export default CartDetails


// ## CartDetails
//     - List of all items added to cart that show the items and their quantity

// Example:
// - Laptops: 1
//     - Headphones: 3
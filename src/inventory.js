

const InventoryGrid = (prop) => {
    const { inventoryList } = prop;

    const onAddToCart = (inventory) => {
        const newInverntory = { ...inventory, ...{ quantity: 1 } }
        prop.addToCart(newInverntory)
    }
    return (
        <div className="gridBorder">
             <h2>Product Inventory Details</h2>
            <table>
                <thead>
                    <th>Sr. no</th>
                    <th>Name</th>
                    <th>Quanitiy</th>
                    <th>Weight</th>
                    <th>Price</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {inventoryList.map((item, i) => {
                        return <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item?.name}</td>
                            <td>{item?.quantity}</td>
                            <td>{item?.weight}</td>
                            <td>{item?.price}</td>
                            <td>{item?.quantity ? <button onClick={() => onAddToCart(item)}>Add To Cart</button> : ''}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default InventoryGrid;

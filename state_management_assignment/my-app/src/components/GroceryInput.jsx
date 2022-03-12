import { useState } from "react"

export const GroceryInput =({addGrocery})=>{
    const [item, setItem] = useState('');
    return <div className="inp">
        <input placeholder="Enter Item" type="text" onChange={(e)=>{
            setItem(e.target.value);
        }}  />
        <button onClick={()=>{
            addGrocery(item);
        }}>Add Item</button>
    </div>
}
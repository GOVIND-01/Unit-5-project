import { useState } from "react"
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";

export const Grocery =()=>{
    const [grocery, setGrocery] = useState([]);
    const addGrocery =(data)=>{
        const n={
            title:data,
        }
        setGrocery([...grocery,n])
    };
    return (
        <div>
            <GroceryInput addGrocery={addGrocery}/>
            {grocery.map((e)=>(
                <GroceryList grocery={e}/>))}
        </div>
    )
}
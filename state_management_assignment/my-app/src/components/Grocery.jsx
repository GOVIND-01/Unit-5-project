import { Component, useEffect, useState } from "react"
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import axios from "axios";
export const Grocery =()=>{
    const [grocery, setGrocery] = useState([]);
    const addGrocery =(data)=>{
        const n={
            title:data,
            id: Date.now()+Math.random()
        }
        setGrocery([...grocery,n])
    };
    const DeleteItm =(id)=>{
        console.log(id);
        setGrocery((prev)=>{
            return prev.filter((data)=> data.id !== id)
        })
    }
    useEffect(()=>{
        getData();
        
    },[])
    const getData =()=>{
        axios.get(`http://localhost:3000/data`).then((res)=>{
        console.log(res.data);    
        setGrocery(res.data)
        })
        
    };
   const Component=()=>{
        const req={
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title:''})
        }
        fetch(`http://localhost:3000/data`,data).then(res => res.json()).then(data=> this.setGrocery({id: data.id}));
    }
    return (
        <div>
            <GroceryInput addGrocery={addGrocery}/>
            {grocery.map((e)=>(
                <GroceryList grocery={e} DeleteItm = {DeleteItm}/>))
                
            }
        </div>
    )
}
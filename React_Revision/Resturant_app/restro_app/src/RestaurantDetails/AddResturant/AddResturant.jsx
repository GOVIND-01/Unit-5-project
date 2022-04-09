import axios from "axios";
import { useState } from "react"

export const AddResturant=()=>{
    const [data, setData] = useState({
        name: "",
        img: "",
        price:"",
        rating:"",
        payment:"",
        votes:"",
        review:"",
        catgories:""
        
    });
    const handleChange=(e)=>{
        const newData = {...data};
        newData[e.target.id]= e.target.value;
        setData(newData);
        console.log(newData);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3004/data", {
            name: data.name,
            img: data.img,
            price:data.price,
            rating:data.rating,
            payment:data.payment,
            votes:data.votes,
            review:data.review,
            catgories:data.catgories
            
        }).then(res=>{
            console.log(res.data);
        })
    }
    return(
        <div>
            <form onSubmit={(e)=>{
                handleSubmit(e);
            }}>
                <input id="name" type="text" value={data.name} onChange={(e)=>{
                    handleChange(e);
                }} placeholder="Enter resturant name"/>
                <input id="img" type="url" value={data.img} onChange={(e)=>{
                    handleChange(e);
                }} placeholder="Enter Image"/>
                <input id="price" type="number" value={data.price} onChange={(e)=>{
                    handleChange(e);
                }} placeholder="Cost for one"/>
                <input id="rating" type="number" value={data.rating} onChange={(e)=>{
                    handleChange(e);
                }} placeholder="rating"/>
                <input id="payment" type="text" value={data.payment} onChange={(e)=>{
                    handleChange(e);
                }} placeholder="Payment methods"/>
                <input id="votes" type="number" value={data.votes} onChange={(e)=>{
                    handleChange(e);
                }} placeholder="Total votes"/>
                <input id="review" type="number" value={data.review} onChange={(e)=>{
                    handleChange(e);
                }} placeholder="review"/>
                <input id="catgories" type="text" value={data.categories} onChange={(e)=>{
                    handleChange(e);
                }} placeholder="categories"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
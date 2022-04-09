import { useEffect, useState } from "react"
import axios from "axios";
import "../RestaurantDetails/RestaurantDetails.css"
export const ResturantDetails=()=>{
    const [details, setDetails] = useState([]);
    useEffect(()=>{
        getData();
    },[]);
    function getData(){
        axios.get(`http://localhost:3004/data`).then((res)=>{   
        setDetails(res.data);
        })

    }
    const fourStar=(details)=>{
        console.log("hello 4");
        details.map((e)=>{
            if(e.rating==4){
                
            }
        })

    }
    
    return (
        <div>
          <h1 className="hunger_games">HUNGER GAMES</h1>
          <div className="restorent_main">
          <div className="resturant_rating">
            <button onClick={()=>{
                  oneStar()
              }}>4 Star</button>
              <button onClick={()=>{
                  fourStar()
              }}>3 Star</button>
              <button onClick={()=>{
                  fourStar()
              }}>2 Star</button>
              <button onClick={()=>{
                  fourStar()
              }}>1 Star</button>
          </div>
            <div className="payment_method">
              <button> Cash </button>
              <button>Card</button>
              <button>All</button>
            </div>
            <div className="sort_function">
              <button>High to low</button>
              <button>Low to high</button>
            </div>
          </div>
           
          {details.map((detail) => {
            const list = (
              <>
                <ul>
                  <li>Id: {detail.id}</li>
                  <li>Name: {detail.name}</li>
                </ul>
                <hr />
              </>
            );
            return list;
          })}
        </div>
      );    
}
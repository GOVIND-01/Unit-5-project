import { useEffect, useState } from "react"

export const ResturantDetails=()=>{
    const [details, setDetails] = useState("");
    console.log(details)
    useEffect(()=>{
        getData();
    },[]);
    function getData(){
        fetch('http://localhost:3004/data')
    .then(response => response.json())
    .then((jsonData) => {
    // jsonData is parsed json object received from url
        setDetails(jsonData);

    })
    .catch((error) => {
    // handle your errors here
    console.error(error)
  })

    }
    
    return (
        <div>
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
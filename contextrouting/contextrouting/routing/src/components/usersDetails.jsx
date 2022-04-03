import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
export const Userdetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`);
    }, [])
    
    if (true) {
        return <Navigate to = "/login"></Navigate>
    }

    return (
        <div>useer id : {id} </div>
    );
}

// what we have to do we first login user and then shgow product
// we ahive using Naviget tag
// we have to get data back and show 
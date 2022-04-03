import { useEffect, useState} from "react";
import axios from "axios"
import { Link } from "react-router-dom";
export const User = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get(`https://reqres.in/api/users`).then(({ data }) => {
            setList([...data.data])
        });
    },[]);
    return (
        <div style={{
            display: "flex",
            flexDirection:"column",
        }}>
            {list.map((e) => (
                <Link to={`/users/${e.id}`} key={e.id}>
                    {e.id}.{e.first_name}
                </Link>
            ))};
       </div>
    );
}

// if we want visit users/id1 -- users/id2 so we use such
// after clicking on some id we are able to get data back

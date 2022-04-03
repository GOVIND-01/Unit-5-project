import { useParams } from "react-router-dom";

export const Product = () => {
    const { id } = useParams();
    
    return (
        <div>
            <h1>You are on prodcuct page:{id}</h1>
        </div>
    );
}

// for reducing lots of writing router stuff we use params object

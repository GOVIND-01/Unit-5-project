import { useNavigate, useParams } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    return (
      <div>
        <input type="text" placeholder="Enter username" />
        <input type="text" placeholder="Enter password" />
        <button onClick={() => {
          navigate("/product");
        }}>LogIn</button>
      </div>
    );
}

// after creating this page we have to connetct this with app and navbar
// we are navigate something ater login part done
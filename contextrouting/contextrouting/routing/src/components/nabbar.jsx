import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
      <nav>
        <div
          style={{
            width: "50 %",
            display: "flex",
            justifyContent: "space-evenly",
            gap: "10px",
          }}
        >
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
          <Link to="/users">UserList</Link>
          <Link to="/login">LogIn</Link>
        </div>
      </nav>
    );
}

// link to tag stop the network request 
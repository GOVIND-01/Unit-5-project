
export const GroceryList =({grocery, DeleteItm})=>{
    return(
        <div className="itemdiv">{grocery.title} <button onClick={()=>{
            DeleteItm(grocery.id);
        }}>Delete</button></div>
    );
}
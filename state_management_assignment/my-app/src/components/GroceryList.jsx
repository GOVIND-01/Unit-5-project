export const GroceryList =({grocery})=>{
    return(
        <div className="itemdiv">{grocery.title} <button onClick={(grocery)=>{
        }}>Delete</button></div>
    );
}
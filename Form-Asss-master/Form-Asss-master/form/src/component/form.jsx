import axios from "axios";
import {useEffect, useState}from "react"
import { Trdata } from "./tr";
export const Forms =()=>{
    const [formData,setFormdata]= useState({});
    const [creat,setCreat]=useState([]);


 useEffect(()=>{
     get()
 },[])

  const handle =(e)=>{
      const {id,value}=e.target;

   setFormdata({
       ...formData,
       [id]:value,
   });
  };

  const submit=(e)=>{
 

  axios.post(" http://localhost:8080/users" ,formData).then(()=>{
    //   alert("user succesfully signup");
// console.log(formData)
  });
  };

 const get=(e)=>{
    axios.get(" http://localhost:3001/users" ,formData).then((res)=>{
        setCreat(res.data)
    })
 }

 const deleteData=(id)=>{
 const res = creat.filter((el) =>{
    return el.id !=id
})
   setCreat([...res])
 }

  return (
      <div>
         <form onSubmit={submit}>
          <h3> Employee details</h3>
          <input type="text"  id="name" onChange={handle} placeholder="Enter username"/>
          <input type="Number"  id="age" onChange={handle} placeholder="Enter age"/>
          <input type="descrption" id="address" onChange={handle} placeholder="Enter adress"/>
          <select type="department" id="department" onChange={handle} placeholder="Department">
          <option>--</option>
             <option>Student</option>
             <option> IA</option>
             <option>Founder</option>
          </select>
          <input type="text" id="salary" onChange={handle} placeholder="Salary"/>
          <input type="checkbox" id="maritalState" onChange={handle} placeholder="MaritalState"/>
      <input type="submit" value={"Create user"} />
      </form>
   <table id="tabi">
       <thead>
           <tr>
               <th>Name</th>
               <th>Age</th>
               <th>Address</th>
               <th>Department</th>
               <th>Salary</th>
               <th>MaritalState</th>
               <th>Delete</th>
           </tr>
       </thead>
    <tbody>
        {creat.map((e)=>(<Trdata data={e} key={e.id} deleteData={deleteData}/>))}
    </tbody>
   </table>

      </div>
  )
}
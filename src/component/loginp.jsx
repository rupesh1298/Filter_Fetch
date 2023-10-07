import React from 'react'
import { useState } from 'react';

function Loginp() {
    const[user,setUser]=useState({
        fname:'',
        lname:"",
        email:''
    });
    const[record,setRecord]=useState([]);
    const handleChange=(e)=>{
       const name=e.target.name;
       const value=e.target.value;
       setUser({...user,[name]:value});
       //console.log(user);
    };
    const handlesubmit=(e)=>{
          e.preventDefault();
      const newUser={...user,id:new Date().getTime().toString()};
      setRecord([...record,newUser]);

      setUser({fname:" ",lname:" ",email:""});
    };
  return (
    <div>
      <h2>Login Here</h2>
      <div>
        <form onSubmit={handlesubmit} method='post'>
            <div>
            <label htmlFor="fname">Enter Fname</label>
            <input type="text" name='fname' id='fname' value={user.fname} onChange={handleChange} />
            </div>
            <div>
            <label htmlFor="lname">Enter Lname</label>
            <input type="text" name='lname' id='lname' value={user.lname}  onChange={handleChange}/>
            </div>
            <div>
            <label htmlFor="email">Enter Email</label>
            <input type="text" name='email' id='email' value={user.email} onChange={handleChange} />
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
      </div>
      <div>
      {/* {
        record.map((item)=>(
                <div key={item.key}>
                <p>{item.fname}</p>
                <p>{item.lname}</p>
                <p>{item.email}</p>
            </div>
            )
        )
       } */}
       {/* {
        record.map((item)=>{
            return (<div key={item.key}>
                <p>{item.fname}</p>
                <p>{item.lname}</p>
                <p>{item.email}</p>
            </div>) 
        }  
            )
       } */}
       <table border={"2px solid black"}>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email ID</th>
            </tr>
        </thead>
        <tbody>
            {
                record.map((item)=>(
                    <tr key={item.id}>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.email}</td>
                    </tr>
                ))
            }
        </tbody>
       </table>
      </div>
    </div>
  )
}

export default Loginp;

import React, { useState } from 'react'

function Login() {
    const[user,setUser]=useState({
        fname:"",
        lname:"",
        email:"",
        phone:""
    });
    const[record,setRecord]=useState([]);//empty array bcz wanna to print details so store and update details
    const handleChange=(e)=>{
              const name=e.target.name;//const name is name attribute of all input fields
              const value=e.target.value;
              setUser({...user,[name]:value});//why [name] for all data attributes
    };
    const handleSubmit=(e)=>{
         e.preventDefault();
         const newUser={...user,id:new Date().getTime().toString()}//to get all user data
         //why id bcz want to prinnt data in map so need one id
         setRecord([...record,newUser]);//array hai esiliye use[] setrecords me records add krna hai to prev + future(newrecord)
         //setRecord([newUser]); also use for to show only recent data
         setUser({fname:"",
         lname:"",
         email:"",
         phone:""});
    };
  return (
    <div>
     <h1>Registration</h1>
     <div style={{marginLeft:"200px", border:"2px solid black", padding:"20px"}}>
        <form onSubmit={handleSubmit}>
            <div >
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" id="fname" value={user.fname} onChange={handleChange}/> 
            </div>
            <div>
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" id="lname"value={user.lname} onChange={handleChange}/> 
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email"value={user.email} onChange={handleChange}/> 
            </div>
            <div>
            <label htmlFor="phone">Phone</label>
            <input type="phone" name="phone" id="phone"value={user.phone} onChange={handleChange}/> 
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
     </div>
     {
        record.map((item)=>{
            const{id,fname,lname,email,phone}=item;
            return(
                // <div key={item.id}>
                //     <p>{item.fname}</p>
                //     <p>{item.lname}</p>
                //     <p>{item.email}</p>
                //     <p>{item.phone}</p>
                // </div>
                <div key={id}>
                <p>{fname}</p>
                <p>{lname}</p>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
            )
        })
     }
     
    </div>
  )
}

export default Login;

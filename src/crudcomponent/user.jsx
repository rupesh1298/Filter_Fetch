import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

//always import after install bootstrap 

//npm i bootstrap@5 --save theb import ..nodemodule/bootstrap/....... in app.js
function User() {
    const history=useHistory();
    const[name,setname]=useState("Add User");
    const[newUser,setnewUser]=useState({
        id:"",
        name:"",
        email:""
    });
    const [user,setUser]=useState([{
        id: 1,
        name: "Rupesh",
        email: "r@gmail.com"
    },
    {
        id: 2,
        name: "Shraddha",
        email: "s@gmail.com"
    },
    {
        id: 3,
        name: "Ram",
        email: "ram@gmail.com"
    }])
   
        
   
    const handleDelete = (id) => {
        const upData=user.filter((i)=>i.id!=id);
        setUser(upData)
    };
    const handleUpdate = (id) => {
        const upData=user.filter((i)=>i.id!=id);
        setUser(upData)//niche wala data and selected delete
        const selectUser=user.find((i)=>i.id==id);
        setnewUser(selectUser)
        setname("Update User");
        

    };
    const handleSubmit = (e) => {
           e.preventDefault();
           setUser([...user,newUser]);
           setnewUser({id:"",name:"",email:""})
           setname("Add User");
    };
    const handleData = (e) => {
        const name=e.target.name;
        const value=e.target.value;
        setnewUser({...newUser,[name]:value})
    }
    return (
        <div>
            <h2>Basic Crud Operations</h2>
            <br></br>
            <table border={"2px solid black"} className="table-striped table-bordered table-light">
                <thead>
                    <tr>
                        
                        <th>User Id</th>
                        <th>User Name</th>
                        <th>User Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" id='id' name='id' value={newUser.id} onChange={handleData}/></td>
                        <td><input type="text" id='name' name='name'value={newUser.name} onChange={handleData}/></td>
                        <td><input type="text" id='email' name='email'value={newUser.email} onChange={handleData}/></td>
                        <td><button className='btn btn-success'onClick={handleSubmit}>{name}</button></td>
                    </tr>
                    {
                        user.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td><button className='btn btn-primary' onClick={()=>handleUpdate(item.id)}>Update</button></td>
                                <td><button className='btn btn-danger' onClick={()=>handleDelete(item.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default User;

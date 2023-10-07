import React, { useEffect, useState } from 'react'

function GetData() {
    const [data,setData]=useState([]);
    const [filterId,setFilterId]=useState("");
    const[filterData,setFilterData]=useState(data);
    useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json()).then((resl)=>{
        setData(resl);
        console.log(data);
        setFilterData(resl);
       })
    },[]);//empty array to refresh data in useeffect only for ONCE not for every time when staate get change
    const handleChangeFilterValue=(e)=>{
        setFilterId(e.target.value);
    }
    const handleSubmit=()=>{
        const newData=data.filter((item)=>item.userId === parseInt(filterId,10));
       setFilterData(newData);
    }   
    
  return (
    <div>
      <table border={"1px solid black"}>
        <thead>
            <tr>
                <th>Id</th>
                <th>UserID<input style={{width:"30px"}}
                type='number'
                min={0}
                id="fid"
                value={filterId}
                onChange={handleChangeFilterValue}
                ></input></th>
                <th>Title</th>
                <th><button style={{backgroundColor:"lightblue"}} onClick={handleSubmit}>Filter</button></th>
            </tr>
        </thead>
        <tbody>
           {
            filterData.map((item)=>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.userId}</td>
                    <td>{item.title}</td>
                </tr>
            ))
           }
        </tbody>
      </table>
    </div>
  );
}

export default GetData;


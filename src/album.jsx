import React from 'react'
import { useEffect,useState } from 'react'
import Image from './Image';
import Title from './Components/Title';
import { Link } from "react-router-dom";

export default function Album() {
  const [data, setData] = useState([]);
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json())
    .then(albums=> setData(albums))
    .catch(err=> console.log(err))
       
},[])
return (
  <div>
     <Link to="/expense" >Expense</Link>
    {data.map((item) => {
      return (
        <>
       
          <Title title={item.title} casing="lower" number={123}/>
          <Title title={item.title} casing="upper"/>
          <Title title={item.title}/>
         <Image path={item.url}/>
        </>
      );
    })}
  </div>
);
  
}

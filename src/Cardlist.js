import React from "react";
import Card from './Card';


const Cardlist = ({ robots }) => {
  robots.map((user, i) => {
  return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />})
 
 return(
  <div>
    {   robots.map((user, i) => {
  return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />})
  };
  </div>
 );
}

export default Cardlist;
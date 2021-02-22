import React from 'react'
const box = document.getElementsByClassName('box');



function VacationComponent(props){
   return(
     <div className="box">
       <h1> Location: {props.spot.place}</h1>
       <h1> Price: {props.spot.price} </h1>
       <h1> Best travel time: {props.spot.timeToGo}</h1>
       
    </div>
    
  )
}

export default VacationComponent
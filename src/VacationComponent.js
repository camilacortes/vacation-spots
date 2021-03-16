import React from 'react'




function VacationComponent(props){
let newPrice;

  if(props.price<=500){
    newPrice = '$'
  } else if(props.price<=1000 & props.price >= 501){
    newPrice = '$$'
  } else {
    newPrice = '$$$'
  }
  

  return(
     <div className="box" style={{backgroundColor:'#' + props.color}}>
       <h1>{newPrice}</h1>
       <h1> Location: {props.place}</h1>
       <h1> Price: {props.price} </h1>
       <h1 className="time"> Best travel time: {props.time}</h1>
    </div>
  )
}

export default VacationComponent
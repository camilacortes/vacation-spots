import React from 'react'
import VacationComponent from './VacationComponent'
import vacationSpots from './vacationSpots';



function App(){
  const spotsComponent = vacationSpots.map(item => {
    return <VacationComponent key ={item.place} time={item.timeToGo} place={item.place} price={item.price} color={item.color} />
  })

  
  return(
    <div>
      <h1 class="header">Vacation Spots </h1>
    {spotsComponent}
    </div>
    
  )
}

export default App
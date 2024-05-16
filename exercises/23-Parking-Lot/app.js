let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]
let getParkingLotState = (ocupacinParking) =>{
  let state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0,
  }
  for(let i of ocupacinParking){
    for(let x of i){
      if(x === 1){
        state.occupiedSlots += 1
        state.totalSlots +=1
      }
      else if(x === 2){
        state.availableSlots += 1
        state.totalSlots += 1
      }
    
      }
     
    }
    return state
  }
 

// Your code here


console.log(getParkingLotState(parkingState))

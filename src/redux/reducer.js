const initionState = {checkbox:[true, true, true, true, true], transfers: [0, 1, 2, 3],
  aviasalesTickets: [], btnFilter: 'САМЫЙ ДЕШЕВЫЙ',
  loading: false, ticketsNum: 5}


const reducer = (state = initionState, action) => {
   switch (action.type) {
       case 'ONCHECKBOX':
         const idx = action.idx
         let newState = Object.assign({}, state); 
         newState.checkbox[idx] =! newState.checkbox[idx] 

        if (idx === 4 && newState.checkbox[4]) {
          newState.checkbox = [true, true, true, true, true]
          newState.transfers = [0, 1, 2, 3] 
        }
        if(idx !== 4 && newState.checkbox[0] && newState.checkbox[1] && newState.checkbox[2] && newState.checkbox[3]) {
          newState.checkbox[4] = true 
        }
        if (idx === 4 && !newState.checkbox[4]) {
          newState.checkbox = [false, false, false, false, false]
          newState.transfers = []  
        }
        if(idx !== 4 && newState.checkbox[idx]) {
         let aaa = [...newState.transfers]
          aaa.push(idx)
          newState.transfers = aaa
        }
        if(idx !== 4 && !newState.checkbox[idx]) {
          newState.checkbox[4] = false
          if (newState.transfers.includes(idx)) {
            newState.transfers = newState.transfers.filter((item) => item !== idx);
          }
        }
        

        return newState;
        
       case 'TICKETS': 
         const actionTickets = action.obj
         let newStateTickets = Object.assign({}, state); 
         newStateTickets.aviasalesTickets = newStateTickets.aviasalesTickets.concat(actionTickets.tickets).sort((objA,objB) => { return objA.price - objB.price})
         newStateTickets.loading = actionTickets.stop 
       
       return newStateTickets;
          
       case 'BTNFILTRE':
        let newStateBtnFiltre = Object.assign({}, state) 
        newStateBtnFiltre.btnFilter = action.name

       return newStateBtnFiltre;

       case 'TICKETSNUM':
         const num = action.num
         let newStateNum = Object.assign({}, state) 
         newStateNum.ticketsNum += num
         
       return newStateNum;

       default: 
           return state;
   }
 }
 
 export default reducer;
const initionState = {checkbox:[true, true, true, true, true],
   aviasalesTickets: [],   aaa: [], btnFilter: [true, false],
   loading: false, ticketsNum: 5, window: false}


const reducer = (state = initionState, action) => {
    switch (action.type) {
        case 'ONCHECKBOX':
          const idx = action.idx;
          let newState = Object.assign({}, state); 
          newState.checkbox[idx] =! newState.checkbox[idx] 
        
          if (idx === 4 && newState.checkbox[4]) {
            newState.checkbox = [true, true, true, true, true] 
            newState.aviasalesTickets = [...newState.aaa]
          }if (idx === 4 && !newState.checkbox[4]) {
            newState.checkbox = [false, false, false, false, false]  
            newState.aviasalesTickets = []; 
          }
          if(idx !== 4 && !newState.checkbox[idx]) {
            newState.checkbox[4] = false
          }
          if(idx !== 4 && newState.checkbox[0] && newState.checkbox[1] && newState.checkbox[2] && newState.checkbox[3]) {
            newState.checkbox[4] = true
            newState.aviasalesTickets = [...newState.aaa]
          }

          if(newState.checkbox[idx]) {
            newState.aviasalesTickets = newState.aviasalesTickets.concat(newState.aaa.filter((el)  => {
              return el.segments[0].stops.length === idx}))  
          }else {
            newState.aviasalesTickets = newState.aviasalesTickets.filter((el)  => {
              return el.segments[0].stops.length !== idx}) 
          }

          console.log(newState.aviasalesTickets)
        return newState;
         
        case 'TICKETS': 
          const actionTickets = action.obj
          let newStateTickets = Object.assign({}, state); 
          newStateTickets.aviasalesTickets = newStateTickets.aviasalesTickets.concat(actionTickets.tickets).sort((objA,objB) => { return objA.price - objB.price})
          newStateTickets.window = true
          console.log(newStateTickets.aviasalesTickets)
          newStateTickets.aaa = [...newStateTickets.aviasalesTickets]
          newStateTickets.loading = actionTickets.stop 
        
        return newStateTickets;
           
        case 'BTNFILTRE':
          const id = action.id;
          let newStateBtnFiltre = Object.assign({}, state) 
          newStateBtnFiltre.btnFilter[id] =! newStateBtnFiltre.btnFilter[id] 
          if (id === 0 && newStateBtnFiltre.btnFilter[0]) {
            newStateBtnFiltre.aviasalesTickets.sort((objA,objB) => { return objA.price - objB.price})
            newStateBtnFiltre.btnFilter = [true, false]
          }
          if (id === 1 && newStateBtnFiltre.btnFilter[1]) {
            newStateBtnFiltre.aviasalesTickets.sort((objA,objB) => objA.segments[0].duration - objB.segments[0].duration)
            newStateBtnFiltre.aaa = [...newStateBtnFiltre.aviasalesTickets]
            newStateBtnFiltre.btnFilter = [false, true]
          }
        return newStateBtnFiltre;

        case 'TICKETSNUM':
          const num = action.num
          let newStateNum = Object.assign({}, state) 
          newStateNum.ticketsNum += num
          console.log(newStateNum.ticketsNum)

        return newStateNum;

        default: 
            return state;
    }
  }
  
  export default reducer;

  
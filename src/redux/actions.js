import SwapiService from "../Api/service";

const swapiService = new SwapiService()

export const handleChage = (idx) => ({type: 'ONCHECKBOX',idx});
export const handlePrice = () => ({type: 'ONBTNPRICE'})
export const handleNum = (num) => ({type: 'TICKETSNUM', num})
export const btnChange = (name) => ({type: 'BTNFILTRE', name})
export const newTickets = (obj) => ({type: 'TICKETS', obj})

const aaa = (idTickets, dispatch) => {
  swapiService.getTickets(idTickets)
  .then(res => {
    dispatch(newTickets(res))
    if(!res.stop) {
      aaa(idTickets, dispatch)
    }
  })
}
export const getTicketsAvia = () => {
    return (dispatch) => {
        swapiService.searchId().then((idTickets) => {
        aaa(idTickets, dispatch)
    }) 
  }
}




import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Ticket from '../Ticket/ticket';
import classes from'./ticketList.module.scss';
import * as actions from '../../redux/actions';
import Tabs from '../Tabs/tabs';

function TicketList({tickets, onClickBTN}) {
  
  const [newList, setNewList] = useState([])

  useEffect(() => { 
    setNewList(() => tickets.aviasalesTickets.filter((ticket) => tickets.transfers.includes(ticket.segments[0].stops.length)))
  }, [tickets.aviasalesTickets, tickets.btnFilter,tickets.checkbox,tickets.transfers, tickets.ticketsNum])

  const ticketRender = newList.map((item,index) => {
    const {id, ...itemProps} = item;
      return (
        <Ticket
          {...itemProps}
          key = {index}
        />
      );
  }).slice(0, tickets.ticketsNum)

  return (
    <div> 
      <div className = {classes["app-tabs"]}>
        <Tabs/>
      </div>
      {tickets.transfers.length !== 0 ? 
        <ul className = {classes.ticketList}>
          {ticketRender}
          {tickets.aviasalesTickets.length !== 0 &&
            <button type = "button" onClick={() => {onClickBTN(5)}}className = {classes["app-button"]}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</button> 
          }
        </ul> : tickets.window ? <p className={classes['notTicketList']}>Рейсов, подходящих под заданные фильтры, не найдено</p> : null 
      }
    </div>
  )  
}

function setAviasalesTickets(state) {
  let aaa;
    if(state.btnFilter === 'САМЫЙ ДЕШЕВЫЙ') {
      aaa = state.aviasalesTickets.sort((objA,objB) => { return objA.price - objB.price})
    }else {
      aaa = state.aviasalesTickets.sort((objA,objB) => objA.segments[0].duration - objB.segments[0].duration)
    }
    return aaa;
  }


const mapStateToProps = (state) => {
  return {
      tickets: state,
      aviasalesTickets: setAviasalesTickets(state)
  }
}

const mapDispathToProps = (dispatch) => {
  return {
     onClickBTN: (num) => dispatch(actions.handleNum(num)),
     getTickets: () => dispatch(actions.getTicketsAvia())
  }
}


export default connect(mapStateToProps,mapDispathToProps)(TicketList);
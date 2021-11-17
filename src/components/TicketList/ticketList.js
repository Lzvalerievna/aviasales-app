import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Ticket from '../Ticket/ticket';
import classes from'./ticketList.module.scss';
import * as actions from '../../redux/actions';
import Tabs from '../Tabs/tabs';

function TicketList({tickets, onClickBTN}) {
  
  const [aaa, setAaa] = useState([])

  useEffect(() => { 
    if(tickets.checkbox) {
      setAaa(() => tickets.aviasalesTickets.filter((ticket) => tickets.transfers.includes(ticket.segments[0].stops.length)))
    }
    return aaa;
  }, [tickets.aviasalesTickets, tickets.btnFilter,tickets.checkbox,tickets.transfers, tickets.ticketsNum])

  const ticketRender = aaa.map((item,index) => {
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

const mapStateToProps = (state) => {
  return {
      tickets: state
  }
}

const mapDispathToProps = (dispatch) => {
  return {
     onClickBTN: (num) => dispatch(actions.handleNum(num)),
     getTickets: () => dispatch(actions.getTicketsAvia())
  }
}


export default connect(mapStateToProps,mapDispathToProps)(TicketList);
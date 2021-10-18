import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Ticket from '../Ticket/ticket';
import classes from'./ticketList.module.scss';
import * as actions from '../../redux/actions';
import Tabs from '../Tabs/tabs';

function TicketList({tickets, onClickBTN}) {
  
  const [sortTickets, setSortTicKets] = useState([])

  useEffect(() => { 
    if(tickets.aviasalesTickets !== 0 ) {
      setSortTicKets(tickets.aviasalesTickets.slice(0, tickets.ticketsNum)) 
    }
  }, [tickets.aviasalesTickets,tickets.btnFilter, tickets.ticketsNum])

  const ticketRender = sortTickets.map((item,index) => {
    const {id, ...itemProps} = item;
      return (
        <Ticket
          {...itemProps}
          key = {index}
        />
      );
  })

  return (
    <div> 
      <div className = {classes["app-tabs"]}>
        <Tabs/>
      </div>
      {tickets.aviasalesTickets.length !== 0 ? 
        <ul className = {classes.ticketList}>
          {ticketRender}
          <button type = "button" onClick={() => {onClickBTN(5)}}className = {classes["app-button"]}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</button>
        </ul> :
        tickets.window ? <p className={classes['notTicketList']}>Рейсов, подходящих под заданные фильтры, не найдено</p> : null 
        }
    </div>
  )  
}

const mapStateToProps = (aviasalesTickets) => {
  return {
      tickets: aviasalesTickets
  }
}

const mapDispathToProps = (dispatch) => {
  return {
     onClickBTN: (num) => dispatch(actions.handleNum(num))
  }
}


export default connect(mapStateToProps,mapDispathToProps)(TicketList);
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { Progress } from "antd";
import 'antd/dist/antd.css';
import classes from'./App.module.scss';
import TicketList from '../TicketList/ticketList';
import Filter from '../Filter/filter';
import * as actions from '../../redux/actions';


function App({getTickets, tickets}) {

    useEffect(()=>{
        getTickets() 
    },[])

  
    return(
        <div className = {classes.App}>
          <img className ={classes.logo} src="logo.svg" alt="Logo"/>
          <div className={classes.progressBar}>
          {!tickets.loading ? <Progress  type="dashboard" percent={Math.floor((100 * tickets.aviasalesTickets.length) / 7000)} width= {100} /> : null}  
          </div>
          <div className = {classes["app-content"]}>
            <Filter/>
            <TicketList/>
          </div>
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
       getTickets: () => dispatch(actions.getTicketsAvia())
    }
  }
 
 
 export default connect(mapStateToProps,mapDispathToProps)(App);
 
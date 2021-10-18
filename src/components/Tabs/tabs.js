import React from 'react';
import {connect} from 'react-redux';
import classes from'./tabs.module.scss';
import * as actions from '../../redux/actions';


function Tabs({ticket, getTicketsFiltre}) {
  
    return (
        <div className = {classes.Tabs}>
            <div className= {classes.checkbox}>
                <input type = "checkbox" checked = {ticket.btnFilter[0]} onChange = {() =>  getTicketsFiltre(0)}  className={classes["checkbox-input"]} id = "10"/>
                <label className = {classes["checkbox-label1"]} htmlFor = "10">САМЫЙ ДЕШЕВЫЙ</label>
            </div>
            <div className= {classes.checkbox}>
                <input type = "checkbox" checked = {ticket.btnFilter[1]} onChange = {() =>  getTicketsFiltre(1)}  className={classes["checkbox-input"]} id = "20"/>
                <label className = {classes["checkbox-label2"]} htmlFor = "20">САМЫЙ БЫСТРЫЙ</label>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ticket: state
    }
  }

  const mapDispathToProps = (dispatch) => {
    return {
       getTicketsFiltre: (id) => dispatch(actions.btnChange(id))
    }
  }

export default connect(mapStateToProps, mapDispathToProps)(Tabs);
 
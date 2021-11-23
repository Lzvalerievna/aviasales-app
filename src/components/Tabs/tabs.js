import React from 'react';
import {connect} from 'react-redux';
import classes from'./tabs.module.scss';
import * as actions from '../../redux/actions';


function Tabs({ticket, getTicketsFiltre}) {

    const buttons = [
        {name:'САМЫЙ ДЕШЕВЫЙ',label: 'САМЫЙ ДЕШЕВЫЙ'},
        {name:'САМЫЙ БЫСТРЫЙ',label: 'САМЫЙ БЫСТРЫЙ'}
    ]

    const sortRender = buttons.map(({name,label}) => {
        const isActive = ticket.btnFilter === name
        const classActive = isActive ? "selected" : "";
        return (
            <li key = {name}>
                <button className={classes[`${classActive}`]} onClick={() => getTicketsFiltre(name)} type="button">
                   {label}
                </button>
            </li>
        )
    })

    return (
        <ul className = {classes.Tabs}>
           {sortRender}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        ticket: state
    }
}

const mapDispathToProps = (dispatch) => {
    return {
       getTicketsFiltre: (name) => dispatch(actions.btnChange(name))
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Tabs);
 
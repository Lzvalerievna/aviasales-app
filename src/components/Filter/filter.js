import React from 'react';
import {connect} from 'react-redux';
import classes from './filter.module.scss';
import * as actions from '../../redux/actions';

const Filter = ({counter, onCheckBox}) => {

    return (
        <div className = {classes.Filter}>
            <div className = {classes["filter-name"]}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
            <div className= {classes.checkbox}>
                <input checked = {counter.checkbox[4]} onChange = {() => onCheckBox(4)} className={classes["checkbox-input"]} type="checkbox" id = "1"/>
                <label className = {classes["checkbox-label"]} htmlFor = "1">Все</label>
             </div>
             <div className= {classes.checkbox}>
                <input checked = {counter.checkbox[0]} onChange = {() =>  onCheckBox(0)} className={classes["checkbox-input"]} type="checkbox" id = "2"/>
                <label className = {classes["checkbox-label"]} htmlFor = "2">Без пересадок</label>
             </div>
             <div className= {classes.checkbox}>
                <input checked = {counter.checkbox[1]} onChange = {() =>  onCheckBox(1)} className={classes["checkbox-input"]} type="checkbox" id = "3"/>
                <label className = {classes["checkbox-label"]} htmlFor = "3">1 пересадка</label>
             </div>
             <div className= {classes.checkbox}>
                <input checked = {counter.checkbox[2]} onChange = {() => onCheckBox(2)} className={classes["checkbox-input"]} type="checkbox" id = "4"/>
                <label className = {classes["checkbox-label"]} htmlFor = "4">2 пересадки</label>
             </div>
             <div className= {classes.checkbox}>
                <input checked = {counter.checkbox[3]} onChange = {() => onCheckBox(3)} className={classes["checkbox-input"]} type="checkbox" id = "5"/>
                <label className = {classes["checkbox-label"]} htmlFor = "5">3 пересадоки</label>
             </div>
        </div>
   )
}

const mapStateToProps = (state) => {
   return {
     counter: state
   }
 }

 const mapDispathToProps = (dispatch) => {
   return {
      onCheckBox: (idx) => dispatch(actions.handleChage(idx))
   }
 }

export default connect(mapStateToProps, mapDispathToProps)(Filter);
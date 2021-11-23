import React from 'react';
import {connect} from 'react-redux';
import classes from './filter.module.scss';
import * as actions from '../../redux/actions';


const Filter = ({counter, onCheckBox}) => {

   const obj = {
      0:{text:'Все',idxcheck: 4},
      1:{text:'Без пересадок',idxcheck: 0},
      2:{text:'1 пересадка',idxcheck: 1},
      3:{text:'2 пересадки',idxcheck: 2},
      4:{text:'3 пересадки',idxcheck: 3}
   }
  
   const filterRender = counter.checkbox.map((item,index) => {
     
      return (
         <div className= {classes.checkbox} key = {index}>
            <label className= {classes["checkbox-label"]} >
               <input checked = {counter.checkbox[obj[index].idxcheck]} onChange = {() => onCheckBox(obj[index].idxcheck, counter.transfer)} 
               className={classes["checkbox-input"]} type="checkbox" id = {obj[index].idxcheck}/>
               <span className = {classes["checkbox-fake"]}></span>
               <span className = {classes["checkbox-text"]}>{obj[index].text}</span>
            </label>
         </div>
      );
   })
 
    return (
        <div className = {classes.Filter}>
            <div className = {classes["filter-name"]}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
              {filterRender} 
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
      onCheckBox: (idx, transfer) => dispatch(actions.handleChage(idx, transfer))
   }
 }

export default connect(mapStateToProps, mapDispathToProps)(Filter);
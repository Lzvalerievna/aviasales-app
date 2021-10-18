import React from 'react';
import classes from'./ticket.module.scss';

function Ticket({price, segments,carrier}) {
    
    const rideTime1 = `${Math.floor(segments[0].duration / 60)}ч ${segments[0].duration % 60}м `;
    const rideTime2 = `${Math.floor(segments[1].duration / 60)}ч ${segments[1].duration % 60}м `;

    const addNumber = (num) => {
        if(num < 10) {
           return `0${num}`
        }
        return `${num}`
    }
    
    const timeStart = `${addNumber((new Date(segments[0].date).getMinutes()) %  24)}:${addNumber((new Date(segments[0].date).getHours()) % 60)}`
    const timeHours = `${addNumber((new Date(segments[0].date).getHours() + (Math.floor(segments[0].duration / 24))) % 24)}`;
    const timeMinutes =`${addNumber((new Date(segments[0].date).getMinutes() + (segments[0].duration % 60)) % 60)}`;

    const timeStartBack = `${addNumber((new Date(segments[1].date).getMinutes()) % 24)}:${addNumber((new Date(segments[1].date).getHours()) % 60)}`
    const timeHoursBack = `${addNumber((new Date(segments[1].date).getHours() + (Math.floor(segments[1].duration / 24))) % 24)}`;
    const timeMinutesBack = `${addNumber((new Date(segments[1].date).getMinutes() + (segments[1].duration % 60)) % 60)}`;

    const transferStart = segments[0].stops.length === 0 ? "БЕЗ ПЕРЕСАДОК" : segments[0].stops.length === 1 ?
      `${segments[0].stops.length} ПЕРЕСАДКА` : `${segments[0].stops.length} ПЕРЕСАДКИ`;
    
    const transferBack = segments[1].stops.length === 0 ? "БЕЗ ПЕРЕСАДОК" : segments[1].stops.length === 1 ?
      `${segments[1].stops.length} ПЕРЕСАЛКА` : `${segments[1].stops.length} ПЕРЕСАДКИ`;


    return(
      <div className = {classes.ticket}>
            <div className = {classes["ticket-title"]}>
                <p className = {classes["ticket-price"]}>{price.toLocaleString()} P</p>
                <img className = {classes["ticket-img"]} src={`http://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
            </div>
            <div className = {classes["ticket-res"]}>
                <p className = {classes["ticket-direction"]}>{segments[0].origin}-{segments[0].destination}
                    <p>{timeStart} - {timeHours}:{timeMinutes}</p>
                </p>
                <p className = {classes["ticket-time"]}>В ПУТИ<p>{rideTime1}</p></p>
                <p className = {classes["ticket-transfer"]}>{transferStart}<p>{segments[0].stops.length === 0 ? `\u2014` : segments[0 ].stops.join(",")}</p></p>
            </div>
            <div className = {classes["ticket-res"]}>
                <p className = {classes["ticket-direction"]}>{segments[1].origin}-{segments[1].destination}
                    <p>{timeStartBack} - {timeHoursBack}:{timeMinutesBack}</p>
                </p>
                <p className = {classes["ticket-time"]}>В ПУТИ<p>{rideTime2}</p></p>
                <p className = {classes["ticket-transfer"]}>{transferBack}<p>{segments[1].stops.length === 0 ? `\u2014` : segments[1].stops.join(",")}</p></p>
            </div>
        </div>
    )
}

export default Ticket;

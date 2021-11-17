import React from 'react';
import classes from'./ticket.module.scss';

function Ticket({price, segments,carrier}) {
    
    const addNumber = (num) => {
        if(num < 10) {
           return `0${num}`
        }
        return `${num}`
    }

    const rideTime = (segment) => { return `${Math.floor(segment.duration / 60)}ч ${segment.duration % 60}м `}
    const timeStart = (segment) => { return `${addNumber(new Date(segment.date).getHours())}:${addNumber(new Date(segment.date).getMinutes())}`}
    const timeHours = (segment) => { 
        return `${addNumber((new Date(segment.date).getHours() + (Math.floor(segment.duration / 60))) % 24)}
        :${addNumber((new Date(segment.date).getMinutes() + (segment.duration % 60)) % 60)}`
    }
    const transfer = (segment) => { 
        return segment.stops.length === 0 ? "БЕЗ ПЕРЕСАДОК" : segment.stops.length === 1 ?
            `${segment.stops.length} ПЕРЕСАДКА` : `${segment.stops.length} ПЕРЕСАДКИ`
    }

    return(
      <div className = {classes.ticket}>
            <div className = {classes["ticket-title"]}>
                <p className = {classes["ticket-price"]}>{price.toLocaleString()} P</p>
                <img className = {classes["ticket-img"]} src={`http://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
            </div>
            <div className = {classes["ticket-res"]}>
                <p className = {classes["ticket-direction"]}>{segments[0].origin}-{segments[0].destination}
                    <p>{timeStart(segments[0])} - {timeHours(segments[0])}</p>
                </p>
                <p className = {classes["ticket-time"]}>В ПУТИ<p>{rideTime(segments[0])}</p></p>
                <p className = {classes["ticket-transfer"]}>{transfer(segments[0])}<p>{segments[0].stops.length === 0 ? `\u2014` : segments[0 ].stops.join(",")}</p></p>
            </div>
            <div className = {classes["ticket-res"]}>
                <p className = {classes["ticket-direction"]}>{segments[1].origin}-{segments[1].destination}
                    <p>{timeStart(segments[1])} - {timeHours(segments[1])}</p>
                </p>
                <p className = {classes["ticket-time"]}>В ПУТИ<p>{rideTime(segments[1])}</p></p>
                <p className = {classes["ticket-transfer"]}>{transfer(segments[1])}<p>{segments[1].stops.length === 0 ? `\u2014` : segments[1].stops.join(",")}</p></p>
            </div>
        </div>
    )
}

export default Ticket;

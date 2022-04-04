import '../Styles/Seats.css';

import {useGesture} from "@use-gesture/react";
import {useRef, useState} from "react";
import Dropdown from "./Dropdown";

/**
 * Konvertierung eines Arrays von Saalplätzen zu einer Body-Tabelle
 * @param seats ein Array von Plätzen
 * @param width Breite der Plätze
 * @param height Länge der Plätze
 * @returns {JSX.Element} Body-Tabelle
 */
const seatsToTableBody = (seats, width, height) => {
    const colors = ['lightgreen', 'yellow', 'skyblue', 'white'];

    let tbody = [];

    for (let i = 0; i < seats.length; i++) {
        let row = [];
        for (let j = 0; j < height; j++) {
            if (seats[i][j].status !== 0) {
                row.push(
                    <td
                        key={'_' + seats[i][j].id}
                        style={{backgroundColor: colors[seats[i][j].category]}}
                    />
                )
            } else {
                row.push(
                    <td
                        key={'_' + seats[i][j].id}
                        style={{backgroundColor: colors[seats[i][j].category]}}
                    >
                        <p style={{fontSize: '10px', margin: 0}}>x</p>
                    </td>
                )
            }
        }
        tbody.push(<tr>{row}</tr>)
    }

    return <tbody>{tbody}</tbody>;
}

const Seats = ({seats}) => {
    const [animation, setAnimation] = useState({x: 0, y: 0, scale: .45});

    const maxTableWidth = seats[0].length;
    const maxTableHeight = seats[0][0].length;

    let tableRef = useRef();

    useGesture({
        //Pan-Animation
        onDrag: ({offset: [dx, dy]}) => {
            setAnimation({
                x: dx,
                y: dy,
                scale: animation.scale
            });
        },
        //Zoom-Animation
        onPinch: ({offset}) => {
            if (offset[0] === 0) {
                offset[0] = .6; //Offset 0 vermeiden
            }
            setAnimation({
                x: animation.x,
                y: animation.y,
                scale: offset[0] / 4
            })
        }
    }, {
        target: tableRef,
        eventOptions: {passive: false}
    });

    return (
        <div style={{width: '60vw'}}>
            <div className={'seats'}>
                <div className={'table-container'}>
                    <table
                        ref={tableRef}
                        style={{
                            left: animation.x,
                            top: animation.y,
                            transform: `scale(${animation.scale})`,
                            position: 'relative',
                            touchAction: 'none', //wichtig für UseGesture
                        }}
                    >
                        {seatsToTableBody(seats[0], maxTableWidth, maxTableHeight)}
                    </table>
                </div>
            </div>
            <div style={{
                marginTop: '30px',
                display: 'inline-flex',
                textAlign: 'left',
                columnGap: '30px'
            }}>
                <p>x: {animation.x}</p>
                <p>y: {animation.y}</p>
                <p>scale: {animation.scale}</p>
            </div>
            <Dropdown setAnimation={setAnimation}/>
        </div>
    )
}

export default Seats;
import '../Styles/Seats.css';

import {useGesture} from "@use-gesture/react";
import {useRef, useState} from "react";

const seatsToTable = (seats, width, height) => {
    let tbody = []

    for (let i = 0; i < seats.length; i++) {
        let row = [];
        for (let j = 0; j < height; j++) {
            if (seats[i][j].status !== 0) {
                row.push(
                    <td key={'_' + seats[i][j].id}/>
                )
            } else {
                row.push(
                    <td key={'_' + seats[i][j].id}>
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
    const [animation, setAnimation] = useState({x: 0, y: 0, scale: .4});

    const maxWidth = seats[0].length;
    const maxHeight = seats[0][0].length;


    let tableRef = useRef();

    useGesture({
        onDrag: ({offset: [dx, dy]}) => {
            setAnimation({x: dx, y: dy, scale: animation.scale});
        },
        onPinch: ({offset:[oScale]}) => {
            if(oScale === 0) {
                oScale[0] = .4;
            }
            setAnimation({x: animation.x, y: animation.y, scale: oScale / 4})
        }
    }, {
        target: tableRef,
        eventOptions: {passive: false}
    });

    return (
        <div className={'seats'}>
            <div className={'table-container'}>
                <table
                    ref={tableRef}
                    style={{
                        left: animation.x,
                        top: animation.y,
                        transform: `scale(${animation.scale})`,
                        touchAction: 'none',
                        zIndex: 20,
                        position: "relative"
                    }}
                >
                    {seatsToTable(seats[0], maxWidth, maxHeight)}
                </table>
            </div>
		<div className={'dropdown'}>
                    <p>&nbsp;Wahlbereich</p>
                </div>
        </div>
    )
}

export default Seats;
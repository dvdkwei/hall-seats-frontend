import {TransformWrapper, TransformComponent} from "@kokarn/react-zoom-pan-pinch";
import '../Styles/Seats.css'

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

    return (
        <TransformWrapper
            initialPositionY={-(height / 2)}
            initialPositionX={-(width / 2)}
            initialScale={2}
        >
            <TransformComponent>
                <div className={'table-container'}>
                    <table>
                        <tbody>{tbody}</tbody>
                    </table>
                </div>
            </TransformComponent>
        </TransformWrapper>
    );
}

const Seats = ({seats}) => {

    const maxWidth = seats[0].length;
    const maxHeight = seats[0][0].length;

    return (
        <div className={'seats'}>
            {seatsToTable(seats[0], maxWidth, maxHeight)}
        </div>
    )
}

export default Seats;
import './Styles/App.css';
import down from './icons8-down-24.png';

import {
    // useEffect,
    useState
} from "react";

import Seats from "./Components/Seats";
import {Partners} from "./Components/Partners";

/**
 * Kürzzeitige Methode zum Generieren von Saalplätze
 * @param width Breite der Saalplätze
 * @param height Länge der Saalplätze
 * @returns {*[]} Ein Array von Saalplätze
 */
const generateSeats = (width = 50, height = 60) => {
    let seats = [];
    let idCounter = 0;

    for (let i = 0; i < width; i++) {
        let row = [];
        for (let j = 0; j < height; j++) {
            row.push({
                id: idCounter++,
                x: j,
                y: i,
                status: Math.round((Math.random())),
                category: Math.round((Math.random() * 4))
            });
        }
        seats.push(row);
    }

    return seats;
}

const App = () => {
    const [seats,
        // setSeats
    ] = useState([generateSeats()]);

    // useEffect(fetch('https://www.api.org/seats').then(data => data.json())
    //                      .then(seats => setSeats(seats)).catch(console.log), []);

    return (
        <div className="App">
            <header className="App-header">
                <nav>
                    <p>rsrvtn&nbsp;</p>
                    <img src={down} alt={'menu-icon'} id={'menu-icon'}/>
                </nav>
            </header>
            <div className={'main-container'}>
                <div className={'hall'}>
                    <p>halle 5</p>
                    <Seats seats={seats}/>
                </div>
                <div className={'artist-description'}/>
                <button>auswählen</button>
                <Partners/>
            </div>
            <footer/>
        </div>
    );
}

export default App;

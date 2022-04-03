import '../Styles/Dropdown.css';
import {zoomToArea} from "./Seats";

const Dropdown = () => {
    return (
        <div className={'dropdown'}>
            <p>&nbsp;Wahlbereich</p>
            <div id={'area-list'}>
                <ul>
                    <li onClick={() => zoomToArea(150, 150)}>Bereich 1</li>
                    <li>Bereich 2</li>
                    <li>Bereich 3</li>
                    <li>Bereich 4</li>
                </ul>
            </div>
        </div>
    )
}

export default Dropdown;
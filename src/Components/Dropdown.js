import '../Styles/Dropdown.css';

const changeDropDownText = (newText) => {
    let elem = document.getElementById('dropdown-text');
    elem.innerText = newText;
}

const Dropdown = ({setAnimation}) => {
    const firstArea = {x: 150, y:150} //Beispiel

    return (
        <div className={'dropdown'}>
            <p id={'dropdown-text'}>
                wahlbereich
            </p>
            <div id={'area-list'}>
                <ul>
                    <li onClick={() => {
                        setAnimation({
                            x: firstArea.x,
                            y: firstArea.y,
                            scale: 3
                        });
                        changeDropDownText('Bereich 1');
                    }}>
                        Bereich 1
                    </li>
                    <li>Bereich 2</li>
                    <li>Bereich 3</li>
                    <li>Bereich 4</li>
                </ul>
            </div>
        </div>
    )
}

export default Dropdown;
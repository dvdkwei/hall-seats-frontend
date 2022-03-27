import './Styles/App.css';
import down from './icons8-down-24.png';
import Halle from "./Components/Halle";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <nav>
                    <p>rsrvtn&nbsp;</p>
                    <img src={down} alt={'menu-icon'} id={'menu-icon'}/>
                </nav>
            </header>
            <div className={'main-container'}>
                <Halle/>
                <div className={'dropdown'}>
                    <p>&nbsp;Wahlbereich</p>
                </div>
                <div className={'description-1'}/>
                <button>Auswählen</button>
                <div className={'partners'}>
                    <div className={'first-row'}>
                        <div className={'partner'}/>
                        <div className={'partner'}/>
                        <div className={'partner'}/>
                    </div>
                    <div className={'second-row'}>
                        <div className={'partner'}/>
                        <div className={'partner'}/>
                    </div>
                </div>
            </div>
            <footer>

            </footer>
        </div>
    );
}

export default App;

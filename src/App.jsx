import logo from "./logo.svg";
import "./App.css";

function App() {
    const clickHandler = () => {
        alert("Button clicked!");
    };

    return (
        <div className="App">
            <button onClick={clickHandler} className="App-button">
                <img src={logo} className="App-logo" alt="logo" />
                Click Me
            </button>

            <p className="App-text">
                This is a simple React application with a button that shows an alert when clicked.
            </p>
            <p className="App-text">
                The button includes an image and some text, styled with CSS.
            </p>
        </div>
    );
}

export default App;

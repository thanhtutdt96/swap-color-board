import '@/App.scss';
import {useState} from "react";
import AppContext, {defaultContext} from "@contexts/appContext";
import Board from "@components/board";

function App() {
    const [currentContext, setCurrentContext] = useState(defaultContext);

    const setContext = (context) => {
        setCurrentContext({...context});
    }

    return (
        <AppContext.Provider value={{context: currentContext, setContext}}>
            <div className="App">
                <div className="App__wrapper">
                    <Board/>
                </div>
            </div>
        </AppContext.Provider>
    );
}

export default App;

import './App.css';
import Main from "./Pages/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Images from "./Pages/Images/Images";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path={`categories/:id`}  element={<Images/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
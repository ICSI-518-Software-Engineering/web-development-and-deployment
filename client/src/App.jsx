import { Routes, Route } from 'react-router-dom'
import Inventory from './components/Inventory';
import FetchData from './components/FetchData';

const App = () => {
    return (
        <>
            <Routes>
                <Route index element={<FetchData />} />
                <Route path="/inventory" element={<Inventory />} />
            </Routes>
        </>
    )
}

export default App;
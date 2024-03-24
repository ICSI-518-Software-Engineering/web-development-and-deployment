import { Routes, Route } from 'react-router-dom'
import MainApp from './components/MainApp';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Inventory from './components/Inventory'
import FetchData from './components/FetchData'

function App() {
    return (
        <>
        <Navbar />
        <Routes>
            <Route index element={<Profile />} />
            <Route path="/calculator" element={<MainApp />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/fetchdata" element={<FetchData />} />
        </Routes>
        </>
    )
}

export default App;
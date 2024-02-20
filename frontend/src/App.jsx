import { Routes, Route } from 'react-router-dom'
import Calculator from './components/Calculator'
import Profile from "./components/Profile";
import Navbar from './components/Navbar';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route index element={<Profile />} />
                <Route path="/calculator" element={<Calculator />} />
            </Routes>
        </>
    )
}

export default App;
import { BrowserRouter, Route, Routes, Link, useLocation } from "react-router-dom"

import ShowCreatorsPage from './pages/ShowCreatorsPage.jsx'
import ViewCreatorPage from './pages/ViewCreatorPage.jsx'
import AddCreatorPage from './pages/AddCreatorPage.jsx'
import EditCreatorPage from './pages/EditCreatorPage.jsx'
import HomePage from './pages/HomePage.jsx'

import './App.css'

function Navbar() {
    const location = useLocation()

    // 首页不显示
    if (location.pathname === "/") {
        return null
    }

    return (
        <div className="navbar">
            <Link to="/">
                <button className="home-btn">
                    Home
                </button>
            </Link>
        </div>
    )
}

function App() {

    return (
        <BrowserRouter>

            <Navbar />

            <Routes>
                <Route path='/' element={<HomePage />} />

                <Route path='/viewAll' element={<ShowCreatorsPage />} />
                <Route path='/view/:id' element={<ViewCreatorPage />} />
                <Route path='/add' element={<AddCreatorPage />} />
                <Route path='/edit/:id' element={<EditCreatorPage />} />

            </Routes>

        </BrowserRouter>
    )
}

export default App
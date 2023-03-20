import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./page/header/Header"
import { GlobalStyles } from "./styles/styled/Global"
import Footer from "./page/footer/Footer"
import Home from "./page/home/Home"
import Brand from "./page/brand/Brand"
import Phases from "./page/phases/Phases"
import Celebrate from "./page/celebrate/Celebrate"
import Help from "./page/help/Help"
import Encouraging from "./page/encouraging/Encouraging"
import Path from "./page/path/Path"

const App = () => {
    return (
        <Router>
            <GlobalStyles />
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <Header />
                            <Home />
                            <Brand />
                            <Phases />
                            <Path />
                            <Celebrate />
                            <Help />
                            <Encouraging />
                            <Footer />
                        </>
                    }/>
            </Routes>
        </Router>
    )
}

export default App
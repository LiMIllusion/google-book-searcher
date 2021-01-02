import React from 'react'
import { Navbar } from 'react-bootstrap'
import Searchbar from './Searchbar'
import {useSelector} from 'react-redux'

function NavigationBar() {
    const isHome = useSelector(state => state.homePage)
    return (
        <header>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">GoogleBooks Searcher</Navbar.Brand>
                {isHome && <Searchbar first='true' />}
            </Navbar>
            <Navbar bg="primary" variant="dark" className='d-block d-md-none' >
                {isHome && <Searchbar />}
            </Navbar>
        </header>
    )
}

export default NavigationBar

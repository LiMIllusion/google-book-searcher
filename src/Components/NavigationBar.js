import React from 'react'
import { Navbar } from 'react-bootstrap'
import Searchbar from './Searchbar'

function NavigationBar() {
    return (
        <header>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">GoogleBooks Searcher</Navbar.Brand>
                <Searchbar first='true' />
            </Navbar>
            <Navbar bg="primary" variant="dark" className='d-block d-md-none' >
                <Searchbar />
            </Navbar>
        </header>
    )
}

export default NavigationBar

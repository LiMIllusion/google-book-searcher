import React from 'react'
import {Navbar, Form, FormControl, Button} from 'react-bootstrap'
import {useSelector} from 'react-redux'
function NavigationBar() {
    const listOfBook = useSelector(state => state)
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">GoogleBooks Searcher</Navbar.Brand>
            <Form inline className='ml-auto mr-auto d-none d-md-block'>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    )
}

export default NavigationBar

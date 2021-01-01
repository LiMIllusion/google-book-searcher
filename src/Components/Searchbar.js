import React, {useEffect} from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {newQuery} from './../Actions'
import RequestExample from './RequestExample'

function Searchbar(props) {
    //const listOfBooks = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(newQuery(RequestExample.data.items))
    }, [])
    const classNames ="ml-auto mr-auto ".concat(props.first ? "d-none d-md-block" : "")
    console.log(classNames)
    return (
        <Form inline className={classNames}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" style={props.first ? {} : { width: '100%' }} />
            <Button variant="outline-light" className={props.first ? '' : 'btn-block my-1'}>Search</Button>
        </Form>
    )
}

export default Searchbar

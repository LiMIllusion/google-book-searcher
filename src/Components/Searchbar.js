import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { newQuery, searchValue} from './../Actions'
import axios from 'axios'

function Searchbar(props) {
    const searchString = useSelector(state => state.searchParam)
    const dispatch = useDispatch()
    const classNames = "ml-auto mr-auto ".concat(props.first ? "d-none d-md-block" : "")
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get('https://www.googleapis.com/books/v1/volumes', { 
            params: { 
                q: searchString, 
                key: process.env.REACT_APP_KEY } 
            }).then((res) => {
                dispatch(newQuery(res.data.items))
        }).catch((e) => console.log(e))
    }
    const handleChange = (e) => {
        console.log(e.target.value)
        dispatch(searchValue(e.target.value))
    }
    return (
        <Form inline className={classNames} onSubmit={handleSubmit} onChange={handleChange}>
            <FormControl type="text" placeholder="I promessi sposi..." className="mr-sm-2" style={props.first ? {} : { width: '100%' }} />
            <Button type='submit' variant="outline-light" className={props.first ? '' : 'btn-block my-1'}>Cerca</Button>
        </Form>
    )
}

export default Searchbar

import React, {useEffect} from 'react'
import {Container, Row} from 'react-bootstrap'
import {isItHome} from './../Actions'
import {useSelector, useDispatch} from 'react-redux'
import Book from './Book'
function BooksList() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(isItHome(true))
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    const listOfBooks = useSelector(state =>state.booksList)
    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    {listOfBooks.map((book)=>{
                        return <Book {... book.volumeInfo} id = {book.id} key = {book.id}/>
                    })}
                </Row>
            </Container>
        </>
    )
}

export default BooksList

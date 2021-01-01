import React from 'react'
import {Container, Row} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import Book from './Book'
// import axios from 'axios'
function BooksList() {
        // GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
        // axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${process.env.REACT_APP_KEY}`).then((res)=>{
        //     setProva(res)
        // }).catch((e)=>console.log(e))
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

import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {curBook, isItHome} from '../Actions'
import {Container} from 'react-bootstrap'
import VolumeInfo from './../Components/VolumeInfo'
import SaleInfo from './../Components/SaleInfo'


function BookInfo() {
    const {id} = useParams()
    const listOfBooks = useSelector(state =>state.booksList)
    const book = useSelector(state =>state.currentBook)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(isItHome(false))
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    useEffect(()=>{
        dispatch(curBook(listOfBooks.find(b => b.id === id)))
    },[listOfBooks]) // eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        
        <Container>
            <VolumeInfo {...book.volumeInfo}/>
            <SaleInfo {...book.saleInfo}/>
        </Container> 
    )
}

export default BookInfo

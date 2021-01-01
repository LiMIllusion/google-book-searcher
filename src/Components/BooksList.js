import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
// import axios from 'axios'
import RequestExample from './RequestExample'
function BooksList() {
    const [prova, setProva] = useState([])
    useEffect(()=>{
        // GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
        // axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${process.env.REACT_APP_KEY}`).then((res)=>{
        //     setProva(res)
        // }).catch((e)=>console.log(e))
        setProva(RequestExample.data.items)
    },[])
    console.log(prova)
    // prova.forEach((element)=>{
    //     console.log([element.volumeInfo.title, element.volumeInfo.subtitle || '',...element.volumeInfo.authors])
    // })
    return (
        <>
            <Container>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BooksList

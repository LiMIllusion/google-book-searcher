import React from 'react'
import { Col, Card } from 'react-bootstrap'
import PropTypes from 'prop-types'

function Book(props) {
    console.log(props)
    const imgUrl = props.imageLinks && props.imageLinks.thumbnail
    return (
        <Col sm={12} md={4} xl = {3} className='py-2 mx-1 d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
            {imgUrl && <Card.Img variant="top" src={imgUrl} />}
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="text-muted">{props.subtitle || ''}</Card.Subtitle>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between'>
                    <Card.Link href={props.canonicalVolumeLink} className={props.canonicalVolumeLink ? '' : 'disabled'} target='_BLANK'>GoogleBooks</Card.Link>
                <Card.Link href={`/books/${props.id}`}>Maggiori info</Card.Link>
                </Card.Footer>
            </Card>
        </Col>
    )
}

Book.propTypes ={
    title: PropTypes.string.isRequired,
    imageLinks:PropTypes.object.isRequired,
    canonicalVolumeLink: PropTypes.string.isRequired
}
export default Book

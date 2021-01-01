import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import PropTypes from 'prop-types'


function VolumeInfo(props) {
    console.log(props)
    const imgUrl = props.imageLinks && props.imageLinks.thumbnail
    const listOfAuthors = props.authors && props.authors.join(', ')
    const listOfCategories = props.categories && props.categories.join(', ')
    return (
        <>
            <Row className='d-flex justify-content-center py-3'>
                <Col xs={5} md="auto">
                    <Image thumbnail src={imgUrl} />
                </Col>
                <Col xs={7} >
                    <Row>
                        <p className='px-3 py-0 my-0 h4'>{props.title}</p>
                    </Row>
                    <Row>
                        <p className='px-3 py-0 my-0 h5 text-muted'>{props.subtitle || ''}</p>
                    </Row>
                    <Row>
                        <p className='px-3 py-0 my-0 h6 text-muted'>{listOfAuthors}</p>
                    </Row>
                    <Row>
                        <p className='px-3 py-0 my-0 text-muted'>{listOfCategories}</p>
                    </Row>
                    <Row>
                        <p className='px-3 py-0 my-0 text-muted'>{props.publisher || ''}{props.publisher && ', '}{props.publishedDate || ''}</p>
                    </Row>
                    <Row>
                        <p className='px-3 py-0 my-0 text-muted'>{props.pageCount || ''} pagine</p>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <blockquote className="blockquote">
                        <p className="mb-0">{props.description}</p>
                    </blockquote>
                </Col>
            </Row>
        </>
    )
}

VolumeInfo.propTypes = {
    title: PropTypes.string.isRequired,
    imageLinks: PropTypes.object.isRequired,
    canonicalVolumeLink: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired
}

export default VolumeInfo

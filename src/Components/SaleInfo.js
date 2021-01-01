import React from 'react'
import {Row,Col, Button} from 'react-bootstrap'

function SaleInfo(props) {
    const price = props.saleability === 'FOR_SALE' ? `Acquista a ${props.retailPrice.amount || props.listPrice.amount} ${props.listPrice.currencyCode}` : "Ottieni gratuitamente"
    return (
        <Row>
            <Col>
                <Button className='btn-block' variant={props.saleability === 'NOT_FOR_SALE' ? 'secondary' : 'primary'} href={props.buyLink} target='_BLANK'>
                    {props.saleability === 'NOT_FOR_SALE' ? 'Non in vendita' :  price }
                </Button>
            </Col>
        </Row>
    )
}

export default SaleInfo

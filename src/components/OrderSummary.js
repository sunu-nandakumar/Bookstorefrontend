import React from 'react';
import { Card, Button } from 'react-bootstrap';
import dontthinkimage from '../images/dontthinkimage.jpg';
import '../components/Cart.js'

class OrderSummary extends React.Component {
    render() {
        return (
            <Card className='imagestyle cart-style'>

                <Card.Body>
                    <Card.Text>
                        <div className='cart-header'>
                            <div className='Cart-Name'>Order Summary</div>

                        </div>
                        <div className='cart-second-body'>
                            <div className='card-images'>
                                <Card.Img src={dontthinkimage} className='ss' />
                            </div>
                            <div className='cart-details'>
                                <span className='book-name'>Dont make me think</span>
                                <span className='book-aurthor'>canon doyle</span>
                                <span className='book-cost'>
                                    Rs. 1500 <s className='cut-cost'>Rs. 2000</s>
                                </span>

                            </div>
                        </div>
                        <div className='place-order'>
                            <Button onClick={this.handleClick}>Checkout</Button>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
export default OrderSummary
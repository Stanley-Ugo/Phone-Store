import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Product extends Component {
    render() {
        
        const {id, title, img, price, inCart} = this.props.Product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={() => console.log('you clicked me')}>
                        <Link to="/details">
                            <img src={img} alt="Product" className="car-img-top"/>
                        </Link>
                        <button className="cart-btn" disabled={inCart ? true : false }>

                        </button>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`

`
import React from 'react';
import './detail.scss';
import './detail.scss';import { Link } from 'react-router-dom';

function Detail(props) {
    return (
        <div className="detail">
            <div className="detail-header">
                <Link to="/menu" className="detail-menu">MENU</Link>
            </div>
            <div className="detail-picture">
                <img src="https://www.dominos.com.au/ManagedAssets/AU/product/P378/AU_P378_en_hero_4245.jpg?v-69713102" alt="Pizza" className="detail-picture-pizza" />
                <img src="" alt="" />
            </div>
            <div className="detail-info">
                <div className="detail-info-box">
                    <h1 className="detail-title">CHICKEN PARMY<span className="detail-kjs">7040kj^</span></h1>
                    <p className="detail-description">22 crumbed chicken bites with crispy rasher bacon, creamy mozzarella & rich
                    tomato sauce</p>
                    <Link to='/menu/detail/order-type'>
                        <button className="detail-button">ORDER NOW</button>
                    </Link>
                    <Link to="">Nutritional Info</Link>
                    <Link to="">Additive&Allergen Info</Link>
                </div>
            </div>
        </div>
    )
}

export default Detail;
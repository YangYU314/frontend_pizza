import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import './order-type.scss';

function OderType (props) {
    const {id}=props.match.params
    // const {status} = this.props
  return (
    <div className="order-type">
      <h1 className="order-type_title">Select An Order Type</h1>
      <div className="order-type_container">
        <Link to={`/menu/detail/${id}/order-type/saved-order`} className="order-method type-save">
          <div className="type-icon"></div>
          <div className="type-text">
            <h1 className="type-text_title">Saved Orders</h1>
            <p className="type-text_description">Quickly reorder one of
            <br />your saved Orders</p>
          </div>
        </Link>

        <Link to={`/menu/detail/${id}/order-type/delivery`} className="order-method type-delivery">
          <div className="type-icon"></div>
              <div className="type-text">
                  <h1 className="type-text_title">Delivery</h1>
                  <p className="type-text_description">Have your order delivered 
                  <br />directly to you</p>
          </div>
        </Link>
        <Link to={`/menu/detail/${id}/order-type/pick-up`} className="order-method type-pickup">
          <div className="type-icon"></div>
          <div className="type-text">
            <h1 className="type-text_title">Pick up</h1>
            <p className="type-text_description">Pick up your order at
                                <br />
                            a store</p>
          </div>
        </Link>
      </div>
      <Link to='account' className="log-in">
        Registered Member? Log in / Sign up
            </Link>
    </div>
  )
}

function mapStateToProps(state){
  const {loginInf} = state;

  return {
      status:loginInf.status,   
  }
}

export default connect(mapStateToProps,null)(OderType);
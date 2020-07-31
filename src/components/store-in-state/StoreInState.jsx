import React from "react";
import "./store-in-state.scss";
import StoreCard from '../store/StoreCard';
import { Link } from "react-router-dom";
import axios from 'axios';

function StoreInState(props) {
    let [responseData, setResponseData] = React.useState([])
	const fetchData = React.useCallback(() => {
		axios({
			'method': 'GET',
			'url': 'https://idea-pizza-backend.herokuapp.com/stores',
		})
			.then((response) => {
				setResponseData(response.data)
				// console.log(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
    }, [])
    
	React.useEffect(() => {
		fetchData()
    }, [fetchData])
    
    const stateId = props.stateId;
    const stateList = responseData.find(item => item.stateId === +stateId);
    console.log(stateList)
    let storesList = [];
    stateList && stateList.cities.forEach(item => {
        storesList.push(...item.stores)
    })

    return (
        <div>
            <div className="storeInStateHeader">
                <Link to="/stores" className="storeInStateHeader__back">BACK</Link>
            </div>

            <div className="storeInStateDetail">
                    <span>PizzaHub's STORES IN {props.state}</span>

                    <section className="storeInStateDetail__list">
                        {storesList.map(item => (<StoreCard 
                            key={item.id}
                            id={item.id}
                            name={item.storeName}
                            postcode={item.postcode}
                            address={item.address}
                            suburb={item.suburb}
                            state={item.state}
                            phone={item.phone} 
                            text={"VIEW"}/>))}
                    </section>  
            </div>
        </div>
    )
}

export default StoreInState;
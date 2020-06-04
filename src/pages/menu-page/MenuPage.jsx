import React from "react";
import MainNav from "../../components/main-nav/MainNav";
import MenuNav from "../../components/menu-nav/MenuNav";
import ItemCardContainer from "../../components/item-card-container/ItemCardContainer";
import Footer from "../../components/footer/Footer";
import FOOD_ITEM_DATA from "./food-item-data";
import { connect } from 'react-redux';
import { loadPizzaData } from '../../redux/actions/index';


import "./menu-page.scss";

class MenuPage extends React.Component {

  componentDidMount () {
    // console.log("data",this.props.pizzaData);
    // console.log("data2",FOOD_ITEM_DATA);
    const { loadPizzaData } = this.props;
    loadPizzaData();
    // this.getPizzaData();

  }

  getPizzaData = () => {
    // console.log("data3333",this.props.pizzaData);

    const foodItemArr = this.props.pizzaData;

    // console.log("item",foodItemArr)
    const pathname = this.props.location.pathname;
    const hashtag = this.props.location.hash || "#PIZZAS";

    let filteredFoodArr = foodItemArr.filter((food) =>
      food.locationID.startsWith(hashtag.split("#")[1])

    );
    console.log("pizza", filteredFoodArr)
    if (filteredFoodArr.length === 0) {
      return null;
    } else {
      return (
        filteredFoodArr.map((item) => (
          <ItemCardContainer
            key={item.itemID}
            locationID={item.locationID}
            itemFirstName={item.itemFirstName}
            itemLastName={item.itemLastName}
            items={item.items}
            pathname={pathname}
          />
        )))
    }
  }






  render () {
    return (
      <div className="menu-page">
        <section className="menu-page__nav">
          <MainNav pathname={this.props.location.pathname} />
          <MenuNav hashtag={this.props.location.hash} />
        </section>
        <section className="menu-page__content">
          {this.getPizzaData()}
        </section>
        <Footer />
      </div>
    );

  }

};

const mapStateToProps = (state) => {

  return {
    pizzaData: state.pizzaData.pizzaData
  }
}

const mapActionsToProps = {
  loadPizzaData,

}


export default connect(mapStateToProps, mapActionsToProps)(MenuPage);
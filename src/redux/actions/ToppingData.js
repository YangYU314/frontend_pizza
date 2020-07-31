export const addTopping = (item, id) => {
  return {
    type: "ADD_TOPPING",
    item,
    id,
  };
};

export const deleteTopping = (id) => {
  return {
    type: "DELETE_TOPPING",
    id,
  };
};

export const loadToppingData = () => (dispatch) => {
  dispatch(handleToppingDataRequested());
  fetch("https://idea-pizza-backend.herokuapp.com/toppings")
    .then((res) => res.json())
    .then((res) => dispatch(handleToppingDataSucceeded(res)))
    .catch((err) => dispatch(handleToppingDataFailed(err)));
};

const handleToppingDataRequested = () => ({
  type: "TOPPING_DATA_REQUESTED",
});

const handleToppingDataSucceeded = (res) => ({
  type: "TOPPING_DATA_SUCCEEDED",
  toppingData: { toppingData: res || [] },
});

const handleToppingDataFailed = (err) => ({
  type: "TOPPING_DATA_FAILED",
  data: { err },
});

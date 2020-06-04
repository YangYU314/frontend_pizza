export const initialState= {
    pizzaData:[],
}

const pizzaData = (state = initialState,action)=>{
    console.log('======action',action)
    switch(action.type){
     case 'REQUESTED':
       return {
         ...state,
       }
     case "SUCCEEDED":
       return {
         ...state,
         pizzaData: action.pizzaData.pizzaData,
       }
     case "FAILED":
       return {
         ...state,
       }
     default:
       return state;
  }
}

export default pizzaData;
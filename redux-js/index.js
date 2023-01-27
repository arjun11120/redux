const redux = require('redux')
const createStore = redux.createStore // creating store


const BUY_CAKE = 'BUY-CAKE'
// Action is an object with type property
{
    type : BUY_CAKE
    info : 'First redux action'
}
// ACTION creator is a function that create an action

function buyCake(){
    return{
        type : BUY_CAKE, //Action type
        info : 'first redux action'
    }
}
const initialState = {
    numOfCake : 10,
    numOfIcecream : 20 
}
const reducer = (state = initialState , action) => { //response action send to the store,
    switch(action.type){
        case BUY_CAKE: return{
            ...state,//not mutating state object,copy the state and it use
            numOfCake :  state.numOfIcecream - 1
        }
        case BUY_ICECREAM :return{
            ...state,
            numberOfCake : state.numOfIcecream - 1
        }
        default:return state
    }
}
const store = createStore(reducer)
console.log("initialState",store.getState());
const unsubscribe = store.subscribe(()=>console.log('Update state',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()
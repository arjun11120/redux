const initialState = 0;
const reducer = (state , action)=>{
  switch(action.type){
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'double':
      return state * 2;
    case 'reset':
      return 0 ;
    default:
      return initialState;
  }
};

export default reducer

import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"

 
const rootreducer = combineReducers({

})



const store = createStore(rootreducer,
    compose(applyMiddleware(thunk),

    ))

//console.log(store.getState())
export default store;

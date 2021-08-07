
import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import regireducer from "./Registration/regireducer"
import mainReducer from "./Group/reducer"
import { composeWithDevTools } from 'redux-devtools-extension';

const rootreducer = combineReducers({
    regi: regireducer,
})
const store1 = createStore(
    mainReducer,
    composeWithDevTools()
);


const store = createStore(rootreducer, store1,
    compose(applyMiddleware(thunk),

    ))

//console.log(store.getState())
export default store;

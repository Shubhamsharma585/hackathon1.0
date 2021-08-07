
import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import regireducer from "./Registration/regireducer"
import grpreducer from "./Groups/grpreducer"
import mainReducer from "./Group/reducer"
import { composeWithDevTools } from "redux-devtools-extension"


const rootreducer = combineReducers({
    regi: regireducer,
    grp: grpreducer,
    mainReducer: mainReducer
})
// const store1 = createStore(
//     mainReducer,
//     composeWithDevTools()
// );
const customMiddleWare = (state) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState)
    }
    return next(action)
}

export const store = createStore(rootreducer, compose(applyMiddleware(customMiddleWare)))

// const store2 = createStore(rootreducer, store1,
//     compose(applyMiddleware(thunk),

//     ))

// //console.log(store.getState())
// export default store2;

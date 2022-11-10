import { applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import { imageReducer } from "./image-reducer";
import thunk from "redux-thunk"

let rootReducer = combineReducers({   
    image: imageReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

if (typeof window !== "undefined") {
    window.store = store
}

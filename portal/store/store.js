import {createStore, applyMiddleware,combineReducers} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import {composeWithDevTools} from 'redux-devtools-extension';
import user from './user/reducer'
import global from './global/reducer'

const combineReducer = combineReducers({
    user,
    global
})

const initStore = () => {
 return createStore(combineReducer,composeWithDevTools(applyMiddleware()));   
}

export const wrapper = createWrapper(initStore);
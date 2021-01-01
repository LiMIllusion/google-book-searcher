import booksReducer from './booksReducer'
import currentBookReducer from './currentBookReducer'
import homePageReducer from './homePageReducer'
import searchBarReducer from './searchBarReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    booksList : booksReducer,
    homePage : homePageReducer,
    currentBook : currentBookReducer,
    searchParam : searchBarReducer
})
export default allReducers
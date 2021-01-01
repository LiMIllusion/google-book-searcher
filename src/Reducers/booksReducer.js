const booksReducer = (state = [], action)=>{
    switch (action.type) {
        case 'ADD':
            return [...state]
        default:
            return state
    }
}
export default booksReducer
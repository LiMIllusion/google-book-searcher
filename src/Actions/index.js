export const newQuery = (res)=>{
    return {
        type : 'ADD',
        payload: res
    }
}
export const curBook = (book)=>{
    return {
        type : 'SET',
        payload: book
    }
}
export const searchValue = (title)=>{
    return {
        type : 'SEARCH',
        payload: title
    }
}
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
export const isItHome = (isHome)=>{
    return {
        type : 'CHANGE',
        payload: isHome
    }
}
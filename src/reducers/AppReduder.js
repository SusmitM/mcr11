export const DataReducer=(dataState,action)=>{
    switch(action.type){
        case "Add-Movie":{
            return{
                ...dataState,allMovies:[...dataState.allMovies,
                    {
                        id: action.data.id,
                        title: action.data.title,
                        year: action.data.year,
                        genre:action.data.genre,
                        rating: action.data.rating,
                        director: action.data.director,
                        writer: action.data.writer,
                        cast: action.data.cast,
                        delivered: action.data.delivered,
                        summary:action.data.summary,
                        imageUrl: action.data.imageUrl,
                      }]
            }
        }
        case "Add-Watchlist":{
            const selectedMovie=dataState.allMovies.find(({id})=>id===action.selectedId);
            return{
                ...dataState,watchlist:[...dataState.watchlist,selectedMovie]
            }
        }
        case "Remove-Watchlist":{
            
            return{
                ...dataState,watchlist:dataState.watchlist.filter(({id})=>id!==action.selectedId)
            }
        }
        case "Add-Starred":{
            const selectedMovie=dataState.allMovies.find(({id})=>id===action.selectedId);
            return{
                ...dataState,starred:[...dataState.starred,selectedMovie]
            }
        }
        case "Remove-Starred":{
            
            return{
                ...dataState,starred:dataState.starred.filter(({id})=>id!==action.selectedId)
            }
        }
        default: return dataState
    }
}
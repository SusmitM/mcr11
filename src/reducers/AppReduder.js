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
        default: return dataState
    }
}
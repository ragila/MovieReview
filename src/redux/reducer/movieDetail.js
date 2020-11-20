const initialState = {
    isLoading: false,
    // movies: [],
    // id: null,
    // title: null,
    // synopsis: null,
    // urlPoster: null,
    // urlTrailer: null,
    // releaseDate: null,
    // rating: null
}

const movieDetail = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_MOVIE_DETAIL': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'GET_MOVIE_DETAIL_SUCCESS': {
            return {
                ...state,
                ...action.payload,
                isLoading: true
            }
        }
        case 'GET_MOVIE_DETAIL_FAILED': {
            return {
                ...state,
                isLoading: true
            }
        }
        default: return state;
    }
}

export default movieDetail;
//State arg is not app state, only state this reducer is responsible for
//state must be read only & immutable
export default function (state = null, action) {
    switch (action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state
}
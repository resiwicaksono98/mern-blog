const initialState ={
    name: 'Resi Wicaksono'
}


const globalReducer = (state = initialState,action) => {
    if(action.type === 'UPDATE_NAME'){
        return{
            ...state,
            name: 'Wakwak'
        }
    }
    return state;
}

export default globalReducer

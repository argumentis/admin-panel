
const LOGIN = 'LOGIN'

const initialState = {
    userName: '',
    password: '',
    isAuthorized: false
}

export const loginUserAction = (userName, password, isAuthorized) => {
    return {
        type: LOGIN,
        payload: {
            userName,
            password,
            isAuthorized
        }
    }
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                useName: action.payload.userName,
                password: action.payload.password,
                isAuthorized: action.payload.isAuthorized
            }
        default:
            return state
    }
}

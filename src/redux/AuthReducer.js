
let initializationStore = {
    id: null,
    login: null,
    email: null,
    isAuth: false

}

const AuthReducer = ( state = initializationStore, actions ) => {
    switch (actions.type){
        case "SET-USER-AUTH":
            return {
                ...state,
                ...actions.data,
                isAuth: true

            }
        default:
            return state
    }
}



export const setUserAuth = (id, login, email) =>{
     return { type: "SET-USER-AUTH", data:{ id, login, email } }
 }


export default AuthReducer
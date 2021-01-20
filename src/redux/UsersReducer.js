


let initializationStore = {
    Users: [],
    TotalCountUsers: 0,
    PageSize: 5,
    CurrentPage: 1,
    isLoading: false,
  }

window.asd = initializationStore

const UsersReduser = (state = initializationStore, actions) =>{
  switch (actions.type) {
    case "FOLLOW":
      return {
        ...state, 
        Users: state.Users.map( u => {
          if(u.id === actions.userID){
            return {...u, followed: true}
          }
          return u
        } )
      }


    case "UNFOLLOW": 
      return{
        ...state, 
        Users: state.Users.map( u => {
          if(u.id === actions.userID){
            return {...u, followed: false}
          }
          return u
        } )
      }

      case "SET-USERS":
        return { ...state, Users: actions.Users }

      case "SET-COUNT-USERS":
          return { ...state, TotalCountUsers: actions.count  }

      case "SET-NUMBER-OF-PAGE":
          return { ...state, CurrentPage:actions.numberOfPage}
      
      case "SET-IS-LOADING":
          return { ...state, isLoading:actions.isLoading}

      default: 
          return state
      
      


    

  }

}


export const follow = (userID) => {
 return {type:"FOLLOW", userID: userID}
}
export const unfollow = (userID) => {
  return {type:"UNFOLLOW", userID: userID}
}
export const setUsers =(Users) => {
  return {type:"SET-USERS", Users:Users}
}
export const setTotalCountUsers =(count) =>{
  return {type:"SET-COUNT-USERS", count }
}
export const setCurrentPage = (numberOfPage)=>{
  return {type:"SET-NUMBER-OF-PAGE", numberOfPage}
}
export const setIsLoading = (isLoading) =>{
  return {type:"SET-IS-LOADING", isLoading}
}

export default UsersReduser
const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_MESSAGE = "UPDATE-NEW-POST-MESSAGE"

let initializationStore = {
  PostsData: [
    {id : 1, name: "Daniil", message: "Привет, как дела?" }, //post
    {id : 2, name: "Anton", message: "Оу shit" },            //post
    {id : 3, name: "Ilya", message: "Здесь был Илья" }       //post
  ],
  NewPostText: "Введите сообщение..."
}

const ProfileReducer = (state = initializationStore, actions) => {
    switch (actions.type) {
        case ADD_POST:{
            let postData = {
                name: "Try",
                message: state.NewPostText
              };

            return {
              ...state,
              PostsData : [...state.PostsData, postData],
              NewPostText : ""
            }
          }
            

        case UPDATE_NEW_POST_MESSAGE:
            return {
              ...state,
              NewPostText : actions.text
            }
    
        default:
            return state
    }
}




export const addPostActionCreator = () => {
    return { type: "ADD-POST" }
  }
  export const updateNewPostMessageActionCreator = (text) => {
    return { type: "UPDATE-NEW-POST-MESSAGE", text: text }
  }


export default ProfileReducer
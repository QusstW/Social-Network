const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_MESSAGE = "UPDATE-NEW-POST-MESSAGE"

let initializationStore = {
  PostsData: [
    { name: "Daniil", message: "Привет, как дела?" }, //post
    { name: "Anton", message: "Оу shit" },            //post
    { name: "Ilya", message: "Здесь был Илья" }       //post
  ],
  NewPostText: "Введите сообщение..."
}

const ProfileReducer = (state = initializationStore, actions) =>{

    switch (actions.type) {
        case ADD_POST:
            let postData = {
                name: "Try",
                message: state.NewPostText
              };
              state.PostsData.push(postData)
              state.NewPostText = ""
            return state
        
        case UPDATE_NEW_POST_MESSAGE:
            state.NewPostText = actions.text;
            return state
    
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
const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_TEXT_MESSAGE = "UPDATE-NEW-TEXT-MESSAGE"


let initializationStore = {
  dialogData: [
    { id: 1, name: "Антоха" }, //d
    { id: 2, name: "Илюха" },  //d
    { id: 3, name: "Сеня" },  //d
    { id: 4, name: "Гена" },  //d
    { id: 5, name: "Санёк" },  //d
    { id: 6, name: "Данёк" },  //d

  ],
  messageData: [
    { message: "Привет!" },
  ],
  newMessageText: "Введите сообщение...."
}

const DialogReducer = (state = initializationStore, actions) =>{

    switch (actions.type) {
        case ADD_MESSAGE:
            let messageData = {
                message: state.newMessageText
              }
              state.messageData.push(messageData)
              state.newMessageText = ""
            return state
    
        case UPDATE_NEW_TEXT_MESSAGE:
            state.newMessageText = actions.text
            return state

        default:
            return state     
            
    }

}

export const updateNewTextMessageActionCreator = (messageText)=>{
    return {type:"UPDATE-NEW-TEXT-MESSAGE", text: messageText}
  }
  export const addMessageActionCreator = () =>{
    return {type:"ADD-MESSAGE"}
  }

export default DialogReducer
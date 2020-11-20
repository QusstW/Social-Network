
export const addPostActionCreator = () => {
  return { type: "ADD-POST" }
}
export const updateNewPostMessageActionCreator = (text) => {
  return { type: "UPDATE-NEW-POST-MESSAGE", text: text }
}
export const updateNewTextMessageActionCreator = (messageText)=>{
  return {type:"UPDATE-NEW-TEXT-MESSAGE", text: messageText}
}
export const addMessageActionCreator = () =>{
  return {type:"ADD-MESSAGE"}
}

let store = {

  _state: {
    profilePage: {
      PostsData: [
        { name: "Daniil", message: "Привет, как дела?" }, //post
        { name: "Anton", message: "Оу shit" },            //post
        { name: "Ilya", message: "Здесь был Илья" }       //post
      ],
      NewPostText: "Введите сообщение.asdasd.."
    },

    dialogsPage: {
      dialogaData: [
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
    },

    musicPage: {
      musicList: [
        { name: "Atlant - FILV Nogovickiy" },
        { name: "Wow. Remix Post Malone feat. Roddy Ricch, Tyga" },
        { name: "Atlant - FILV Nogovickiy" },
        { name: "Wow. Remix Post Malone feat. Roddy Ricch, Tyga" },
        { name: "Atlant - FILV Nogovickiy" },
        { name: "Wow. Remix Post Malone feat. Roddy Ricch, Tyga" },
        { name: "Atlant - FILV Nogovickiy" },
        { name: "Wow. Remix Post Malone feat. Roddy Ricch, Tyga" },


      ]

    }
  },
  _rerender() {
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._rerender = observer

  },
  //  addPost  () {
  //   let postData = {
  //     name: "Try",
  //     message: this._state.profilePage.NewPostText
  //   };
  //   this._state.profilePage.PostsData.push(postData)
  //   this._state.profilePage.NewPostText = ""
  //   this._rerender(this._state)
  // },
  // updateNewPostMessage  (text)  {
  //   this._state.profilePage.NewPostText = text;
  //   this._rerender(this._state)
  // },

  dispatch(actions) {
    if (actions.type === "ADD-POST") {
      let postData = {
        name: "Try",
        message: this._state.profilePage.NewPostText
      };
      this._state.profilePage.PostsData.push(postData)
      this._state.profilePage.NewPostText = ""
      this._rerender(this._state)
    }
    else if (actions.type === "UPDATE-NEW-POST-MESSAGE") {
      this._state.profilePage.NewPostText = actions.text;
      this._rerender()
    }
    else if (actions.type === "ADD-MESSAGE") {

        let messageData = {
          message: this._state.dialogsPage.newMessageText
        }

        this._state.dialogsPage.messageData.push(messageData)
        this._state.dialogsPage.newMessageText = ""
        this._rerender(this._state)
    }
    else if (actions.type === "UPDATE-NEW-TEXT-MESSAGE") {
      this._state.dialogsPage.newMessageText = actions.text
      this._rerender()


    }

  }
}







//STATE DATA

//function add Post-message to STATE DATA and <textarea /> = ""


//function push new text from <texarea />  to STATE


//Функция слушателя ( Паттерн обсервер(Наблюдателя))

export default store;

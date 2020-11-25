import DialogReducer from "./DialogReducer"
import MusicReduser from "./MusicReducer"
import ProfileReducer from "./ProfileReducer"

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
  dispatch(actions) {

    this._state.profilePage = ProfileReducer(this._state.profilePage, actions)
    this._state.dialogsPage = DialogReducer(this._state.dialogsPage, actions)
    this._state.musicPage = MusicReduser(this._state.musicPage, actions)


    this._rerender(this._state)


   
  }
}








//STATE DATA

//function add Post-message to STATE DATA and <textarea /> = ""


//function push new text from <texarea />  to STATE


//Функция слушателя ( Паттерн обсервер(Наблюдателя))

export default store;

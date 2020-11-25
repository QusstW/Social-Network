import DialogReducer from "./DialogReducer";
import MusicReduser from "./MusicReducer";
import ProfileReducer from "./ProfileReducer";

const { createStore, combineReducers } = require("redux");



let reducers = combineReducers({

    profilePage: ProfileReducer,
    dialogsPage: DialogReducer,
    musicPage: MusicReduser

})

let store = createStore(reducers)





export default store
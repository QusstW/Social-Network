import DialogReducer from "./DialogReducer";
import MusicReduser from "./MusicReducer";
import ProfileReducer from "./ProfileReducer";
import UsersReduser from "./UsersReducer";

const { createStore, combineReducers } = require("redux");



let reducers = combineReducers({

    profilePage: ProfileReducer,
    dialogsPage: DialogReducer,
    musicPage: MusicReduser,
    findUsersPage: UsersReduser

})

let store = createStore(reducers)





export default store
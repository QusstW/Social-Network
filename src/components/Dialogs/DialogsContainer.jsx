import React from "react";
import { addMessageActionCreator, updateNewTextMessageActionCreator } from "../../redux/DialogReducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";
import s from "./Dialogs.module.css"




const DialogsContainer = (props) => {



    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }


                let onMessageChenge = (messageText) => {
                    store.dispatch(updateNewTextMessageActionCreator(messageText))
                }





                return (
                    <Dialogs addMessage={addMessage} onMessageChenge={onMessageChenge} dialogData={state.dialogsPage.dialogData} messageData={state.dialogsPage.messageData} newMessageText={state.dialogsPage.newMessageText} />
                )

            }

            }







        </StoreContext.Consumer>

    )
}

export default DialogsContainer;


import React from "react";
import { addMessageActionCreator, updateNewTextMessageActionCreator } from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";



const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch( addMessageActionCreator() )
    }

    let onMessageChenge = () => {
        let messageText = newMessageElement.current.value
        props.dispatch( updateNewTextMessageActionCreator(messageText) )
    }

    let dialog = props.dataDialogs.dialogaData.map((d) => {
        return (
            <DialogItem name={d.name} id={d.id} />
        )
    })
    
    let message = props.dataDialogs.messageData.map((m) => {
        return (
            <Message message={m.message} />
        )
    })
    return (
        <div className={s.dialogsList}>
            <div className={s.dialogs_items}>
                {dialog}
            </div>

            <div>
                {message}
                <textarea onChange={onMessageChenge} ref={newMessageElement} value={props.dataDialogs.newMessageText} > </textarea>
                <button onClick={addMessage}>Push</button>

            </div>


        </div>

    )
}

export default Dialogs;


import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";



const Dialogs = (props) => {
    let newMessageElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage()
    }

    let onMessageChenge = () => {
        let messageText = newMessageElement.current.value
        props.onMessageChenge(messageText)
    }

    let dialog = props.dialogData.map((d) => {
 
        return (
            <DialogItem name={d.name} id={d.id} />
        )
    })
    let message = props.messageData.map((m) => {
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
                <textarea onChange={onMessageChenge} ref={newMessageElement} value={props.newMessageText} > </textarea>
                <button onClick={onAddMessage}>Push</button>
            </div>


        </div>

    )
}

export default Dialogs;


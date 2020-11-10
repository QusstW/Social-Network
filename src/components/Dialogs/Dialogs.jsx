import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";


const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = ()=>{
        let message = newMessageElement.current.value
        alert(message)
    }

    let dialog = props.dataDialogs.dialogaData.map((d)=>{
        return(
        <DialogItem name={d.name} id={d.id} /> 
        )
    })


    let message = props.dataDialogs.messageData.map((m)=>{
        return(
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
                <textarea ref={newMessageElement}>Введите сообщение</textarea>
                <button onClick={addMessage}>Push</button>

            </div>


        </div>

    )
}

export default Dialogs;


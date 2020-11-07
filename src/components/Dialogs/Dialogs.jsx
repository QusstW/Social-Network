import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialog = props.dialogaData.map((d)=>{
        return(
        <DialogItem name={d.name} id={d.id} /> 
        )
    })


    let message = props.messageData.map((m)=>{
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
            </div>
        </div>

    )
}

export default Dialogs;


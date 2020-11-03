import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"


const DialogItem = (props) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/Dialogs/" + props.id}> {props.name} </NavLink>
        </div>

    )
}

const Message = (props) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>

    )
}


const Dialogs = (props) => {

    let dialogaData =[
        {id: 1, name:"Антоха"},
        {id: 2, name:"Илюха"},
        {id: 3, name:"Сеня"},
        {id: 4, name:"Гена"},
        {id: 5, name:"Санёк"},
        {id: 6, name:"Данёк"},
 
 ]

    let messageData=[
        {id: 1, message:"Привет!"},
        {id: 2, message:"Как дела?"},
        {id: 3, message:"Что нового?"},

    ]

    return (
        <div className={s.dialogsList}>
            <div className={s.dialogs_items}>
                <DialogItem name={dialogaData[0].name} id={dialogaData[0].id} />
                <DialogItem name={dialogaData[1].name} id={dialogaData[1].id} />
                <DialogItem name={dialogaData[2].name} id={dialogaData[2].id} />
                <DialogItem name={dialogaData[3].name} id={dialogaData[3].id} />
                <DialogItem name={dialogaData[4].name} id={dialogaData[4].id} />
                <DialogItem name={dialogaData[5].name} id={dialogaData[5].id} />
            </div>

            <div>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
                <Message message={messageData[2].message} />

            </div>
        </div>

    )
}

export default Dialogs;
import React from "react";
import { connect } from "react-redux";
import { addMessageActionCreator, updateNewTextMessageActionCreator } from "../../redux/DialogReducer";
import Dialogs from "./Dialogs";




let mapStateToProps = (state)=>{
    return{
        dialogData: state.dialogsPage.dialogData, 
        messageData: state.dialogsPage.messageData, 
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        addMessage: ()=>{
            dispatch(addMessageActionCreator())
        }, 
        onMessageChenge: (messageText)=>{
            dispatch(updateNewTextMessageActionCreator(messageText))
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;


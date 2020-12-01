import React from "react";
import { connect } from "react-redux";
import { addMessageActionCreator, updateNewTextMessageActionCreator } from "../../redux/DialogReducer";
import Dialogs from "./Dialogs";


// const DialogsContainer = () => {



//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState()

//                 let addMessage = () => {
//                     store.dispatch(addMessageActionCreator())
//                 }


//                 let onMessageChenge = (messageText) => {
//                     store.dispatch(updateNewTextMessageActionCreator(messageText))
//                 }





//                 return (
//                     <Dialogs addMessage={addMessage} onMessageChenge={onMessageChenge} dialogData={state.dialogsPage.dialogData} messageData={state.dialogsPage.messageData} newMessageText={state.dialogsPage.newMessageText} />
//                 )

//             }

//             }
//         </StoreContext.Consumer>

//     )
// }


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


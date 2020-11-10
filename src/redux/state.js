import { rerender } from "../rerender";

let state = {
    profilePage:{
        PostsData : [
            {name: "Daniil", message: "Привет, как дела?"}, //post
            {name: "Anton", message: "Оу shit"},            //post
            {name: "Ilya", message: "Здесь был Илья"}       //post
          ],
    },

    dialogsPage: {
        dialogaData  :[
            {id: 1, name:"Антоха"}, //d
            {id: 2, name:"Илюха"},  //d
            {id: 3, name:"Сеня"},  //d
            {id: 4, name:"Гена"},  //d
            {id: 5, name:"Санёк"},  //d
            {id: 6, name:"Данёк"},  //d
          
          ],
        messageData :[
            {id: 1, message:"Привет!"},
            {id: 2, message:"Как дела?"},
            {id: 3, message:"Что нового?"},
          
          ]  
    },
      
    musicPage: {
      musicList:[
        {name: "Atlant - FILV Nogovickiy"},
        {name: "Wow. Remix Post Malone feat. Roddy Ricch, Tyga"},
        {name: "Atlant - FILV Nogovickiy"},
        {name: "Wow. Remix Post Malone feat. Roddy Ricch, Tyga"},
        {name: "Atlant - FILV Nogovickiy"},
        {name: "Wow. Remix Post Malone feat. Roddy Ricch, Tyga"},
        {name: "Atlant - FILV Nogovickiy"},
        {name: "Wow. Remix Post Malone feat. Roddy Ricch, Tyga"},


      ]
      
    }

      

}

export let addPost = (postMessage)=>{
  let postData = {
    name: "Try",
    message: postMessage
  };
  state.profilePage.PostsData.push(postData)
  rerender(state)
}


export default state;

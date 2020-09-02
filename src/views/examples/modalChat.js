import React ,{Fragment,useState,useEffect}from 'react';
import {Modal} from 'react-bootstrap'
import Person from '@material-ui/icons/PersonAddTwoTone';
import Input from '../../components/Input/Input.js';
import Mensajes from '../../components/Mensajes/Mensajes';
//import queryString from 'query-string';


import "../../assets/css/modalchat.css";
// style='width: 100%; min-height: 200px;'
const demos = {
  chat:
  "<iframe src='https://webchat.botframework.com/embed/basepreguntaschatbot-bot?s=KK2rQKfaorc.ilCUxtk3Hk21X7NE8mwL5JBsx8pkKc6dXtA7fg3epQ8'  style='width: 100%; min-height: 200px;bottom:0;'></iframe>"
};
const Iframe =(props) =>{
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

const ModalVideo= (props)=>{
    //const [carga,setCarga]=useState(false);
    const [name, setName] = useState('me');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [robot] = useState(["How do you do, fellow human", "I am not a bot"]);
    const [appState, setAppState] = useState({
      loading: false,
      repos: null,
    });
    

    const [alternative] = useState([
      "Same",
      "Go on...",
      "Try again",
      "I'm listening...",
      "Bro..."
      ]);    
    const [trigger, setTrigger] = useState([
      //0 
      ["hi", "hey", "hello"],
      //1
      ["how are you", "how are things"],
      //2
      ["what is going on", "what is up"],
      //3
      ["happy", "good", "well", "fantastic", "cool"],
      //4
      ["bad", "bored", "tired", "sad"],
      //5
      ["tell me story", "tell me joke"],
      //6
      ["thanks", "thank you"],
      //7
      ["bye", "good bye", "goodbye"]
      ]
      );

      const [reply, setRepply] = useState([
        //0 
        ["Hello!", "Hi!", "Hey!", "Hi there!"], 
        //1
        [
            "Fine... how are you?",
            "Pretty well, how are you?",
            "Fantastic, how are you?"
          ],
        //2
        [
            "Nothing much",
            "Exciting things!"
          ],
        //3
        ["Glad to hear it"],
        //4
        ["Why?", "Cheer up buddy"],
        //5
        ["What about?", "Once upon a time..."],
        //6
        ["You're welcome", "No problem"],
        //7
        ["Goodbye", "See you later"],
    ]);

    function compare(triggerArray, replyArray, text) {   //funcion 1  
      let item;
      let items;
      for (let x = 0; x < triggerArray.length; x++) {
          for (let y = 0; y < replyArray.length; y++) {
              if (triggerArray[x][y] == text) {
                items = replyArray[x];
                item = items[Math.floor(Math.random() * items.length)];
              }
          }
      }
      return item;
  }

  function output(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "");
      
    //compare arrays //then search keyword
    //then random alternative
      
    if (compare(trigger, reply, text)) {
        product = compare(trigger, reply, text);
    } else if (text.match(/robot/gi)) {
        product = robot[Math.floor(Math.random() * robot.length)];
    } else {
        product = alternative[Math.floor(Math.random() * alternative.length)];
    }
    //update DOM
    //addChat(input, product);
    setMessages(messages => [ ...messages, {user:"Chaty",text:product} ]);
        //socket.emit('sendMessage', message, () => setMessage(''));
}

    const sendMessage = (event) => {
      event.preventDefault();
      console.log("mas info",appState.repos);
      if(message) {
        setMessages(messages => [ ...messages, message ]);
        //setMessages(messages => [ ...messages, {user:"Chaty",text:"Respondiendo cualquier cosa siempre"} ]);
        //socket.emit('sendMessage', message, () => setMessage(''));
        output(message.text);
        console.log(messages);
        setMessage({user:"me",text:""});
      }
    }
    return (
      <Modal
         {...props}
         aria-labelledby="contained-modal-title-vcenter"
         centered    
         dialogClassName="modal"  
       >
         <Modal.Header closeButton>
           <Modal.Title id="contained-modal-title-vcenter">
             ChatBot
             <Person/>
           </Modal.Title>
           
         </Modal.Header>
         <Modal.Body>  
           <Iframe iframe={demos["chat"]} allow="autoplay"></Iframe>
           
         </Modal.Body>
        
       </Modal>
     );
      
}



export default ModalVideo;
//<Mensajes messages={messages} name={name} />
// <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
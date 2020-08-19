import React ,{Fragment,useState,useEffect}from 'react';
import {Modal} from 'react-bootstrap'
import Person from '@material-ui/icons/PersonAddTwoTone';
import Input from '../../components/Input/Input.js';
import Mensajes from '../../components/Mensajes/Mensajes';
//import queryString from 'query-string';


import "../../assets/css/modalchat.css";
const ModalVideo= (props)=>{
    //const [carga,setCarga]=useState(false);
    const [name, setName] = useState('me');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    //setName("luis");

    const sendMessage = (event) => {
      event.preventDefault();
      
      if(message) {
        setMessages(messages => [ ...messages, message ]);
        //socket.emit('sendMessage', message, () => setMessage(''));
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
            <div className="messagebox">
            <Mensajes messages={messages} name={name} />
            </div>
          </Modal.Body>
          < Modal.Footer>
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
          </Modal.Footer>
        </Modal>
      );
      
}



export default ModalVideo;
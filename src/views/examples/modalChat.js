import React ,{Fragment,useState}from 'react';
import {Modal} from 'react-bootstrap'
import Person from '@material-ui/icons/PersonAddTwoTone';
import "../../assets/css/modal.css";
const ModalVideo= (props)=>{
    //const [carga,setCarga]=useState(false);
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

            </div>
          </Modal.Body>
          < Modal.Footer>
            <form class="msger-inputarea">
     
            </form>
          </Modal.Footer>
        </Modal>
      );
      
}



export default ModalVideo;
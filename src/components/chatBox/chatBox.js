import React from 'react';
import Close from '@material-ui/icons/Close';
import "./chatBox.css"


  const demos = {
    chat:
      "<iframe src='https://webchat.botframework.com/embed/basepreguntaschatbot-bot?s=KK2rQKfaorc.ilCUxtk3Hk21X7NE8mwL5JBsx8pkKc6dXtA7fg3epQ8'  style='min-width: 400px; width: 100%; min-height: 450px; bottom:25px;'></iframe>"
  };
  
  //codesandbox.io/s/react-iframe-demo-g3vst codePen =
  function Iframe(props) {
      console.log("lo pidio")
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }
    
const Chatbox =(props) => {

    return (
        <div>
        <div className="Box">
            <buttom onClick={props.onClick}><Close className="icono"/></buttom>
            <Iframe iframe={demos["chat"]} allow="autoplay" />
        </div>
        </div>
        
    );
}
export default Chatbox;
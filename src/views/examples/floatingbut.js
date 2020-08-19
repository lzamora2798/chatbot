import React from 'react';
import { Container, Button} from 'react-floating-action-button'
import HelpIcon from '@material-ui/icons/MessageSharp';

const floatbot =(props) => {

    return (
        <Container className="mr-0 pr-0">   
        <Button
            tooltip="AUTOBOT!"
            
            onClick={props.onClick}
            ><HelpIcon/></Button>
        </Container>
    );
}

export default floatbot;

// onClick={() => alert('FAB Rocks!')}
//rotate={true}
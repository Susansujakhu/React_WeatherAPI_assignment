import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class ErrorHandle extends Component {
    refreshPage() {
        window.location.reload(false);
      }
    render() {
        let errors = this.props.data;
        return (
            <div style={{fontFamily:'monospace' ,fontSize:50, fontWeight:'bold',marginTop:"15%"}}>
                {
                    errors === 3?<div>Welcome To Weather Forcast</div>:
                    <div> Enter Valid City Name<br/>
                    <Button onClick={this.refreshPage} variant="outlined" style={{backgroundColor:"green", padding:10, borderRadius:5}}>
                    Retry
                    </Button>
                    </div>

                }
            </div>
        );
    }
}

export default ErrorHandle;
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class FirstScreen extends Component {

    render() {
      const state = this.props.state;
        return (
          <div>
            <TextField
              hintText={"Your Name"}
              errorText="This field is required"
              value={state.name}
            /><br />
            <div className="startButton">
              <RaisedButton>
                Start
              </RaisedButton>
            </div>
            <div className="joinButton">
              <RaisedButton>
                Join
              </RaisedButton>
            </div>
           </div>
        );
    }
}

export default FirstScreen;
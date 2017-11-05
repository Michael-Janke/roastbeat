import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class FirstScreen extends Component {

    render() {
      const state = this.props.state;
        return (
          <div>
            <TextField
              hintText={state.name}
            /><br />
            <div>
              <RaisedButton>
                Start
              </RaisedButton>
            </div>
            <div>
              <RaisedButton>
                Join
              </RaisedButton>
            </div>
           </div>
        );
    }
}

export default FirstScreen;
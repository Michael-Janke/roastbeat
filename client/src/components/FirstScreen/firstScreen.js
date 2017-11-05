import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class FirstScreen extends Component {

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  state = this.props.state;

  render() {
      return (
        <div>
          <TextField
            hintText={"Your Name"}
            errorText="This field is required"
            value={this.state.name}
            onChange={this.handleChange}
          /><br />
          <div className="startButton">
            <RaisedButton>
              Start
            </RaisedButton>
          </div>
          <div className="joinButton">
            <RaisedButton>
              Join test
            </RaisedButton>
          </div>
         </div>
      );
    }
}

export default FirstScreen;
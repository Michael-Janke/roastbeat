import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


class FirstScreen extends Component {

    render() {
      const state = this.props.state;
        return (
          <div>
            <div>
              {state.name}
            </div>
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
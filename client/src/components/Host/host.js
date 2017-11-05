import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { setWS, setPin } from '../../actions';
import { connect } from 'react-redux'
import PendingComponent from '../Teilnehmer/PendingComponent/pendingComponent'

let songs = ['Alan Walker - Faded.mp3',
  'Aqua - Barbie Girl.mp3',
  'Bloodhoundgang - Foxtrot Uniform Charlie Kilo.mp3',
  'Calvin Harris - This Is What You Came For.mp3',
  'Cindy und Bert - Immer wieder Sonntags.mp3',
  'Die Ärzte - Arschloch.mp3',
  'Disturbed - The Sound Of Silence.mp3',
  'DJ Snake - Let Me Love You.mp3',
  'Drake Feat. Wizkid & Kyla - One Dance.mp3',
  'Foo Fighters - The Pretender.mp3',
  'G-Eazy - Me Myself and I.mp3',
  'Green Day - American Idiot.mp3',
  'Imany - Don\'t Be So Shy (Filatov & Karas Remix).mp3',
  'Jennifer Lopez - Ain\'t Your Mama.mp3',
  'Jonas Blue - Fast Car.mp3',
  'Justin Bieber - Love Yourself.mp3',
  'Justin Timberlake - Can\'t Stop The Feeling.mp3',
  'Kungs Vs. Cookin On 3 Burners - This Girl.mp3',
  'Linkin Park - Breaking The Habit.mp3',
  'Lutzenkirchen - 3 Tage Wach.mp3',
  'Major Lazer - Cold Water.mp3',
  'Mike Posner - I Took A Pill In Ibiza.mp3',
  'Modern Talking - You\'re My Heart, You\'re My Soul.mp3',
  'Perfekte Welle - Juli.mp3',
  'Rag\'n\'Bone Man - Human.mp3',
  'Sia Feat. Sean Paul - Cheap Thrills.mp3',
  'Stereoact - Die immer lacht.mp3',
  'The Chainsmokers - Closer.mp3',
  'The Chainsmokers - Don\'t Let Me Down.mp3',
  'The Cranberries - Zombie.mp3',
  'The Police - I\'ll be watching you.mp3',
  'Tina Turner - We Don\'t Need Another Hero.mp3',
  'Twenty One Pilots - Stressed Out.mp3',];

class HostComponent extends Component {

  constructor (props) {
    super();
    // eslint-disable-next-line no-alert
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleAccessCode = (event) => {
    this.setState({
      accessCode: event.target.value,
    });
  };

  state = {
    name: '',
    accessCode: '',
    attendants: [],
    songTitle: '',
    isHost: false,
    startGame: false,
    openGame: false,
    endRound: false,
    endGame: false,
    readyToPlay: false,
  };

  render() {
    const state = this.state;

      return (
        <div>
          {this.props.pin && 
            <PendingComponent />
          }
        </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    pin: state.pin,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    addWS: ws => {
      dispatch(setWS(ws))
    },
    addPin: pin => {
      dispatch(setPin(pin))
    }
  }
}

const Host = connect(mapStateToProps, mapDispatchToProps)(HostComponent)


export default Host

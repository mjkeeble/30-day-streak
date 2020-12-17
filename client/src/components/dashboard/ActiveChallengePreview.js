import React, { Component } from 'react';
import axios from 'axios';
import ActiveChallengeDetails from './ActiveChallengeDetails';
import TrackerButton from './TrackerButton'

export default class ActiveChallengePreview extends Component {
  state = {
    challengeDay: 0,
    activeChallengeDetails: false,
  };

  toggleChallengeDetails = () => {
    this.setState((prevState) => ({
      activeChallengeDetails: !prevState.activeChallengeDetails,
    }));
  };

  withdrawFromChallenge = () => {
    console.log('id', this.props.challenge.id._id)
    axios.put(`/users/${this.props.challenge.id._id}/withdraw`, { status: 'withdrawn' })
    .then(() => {
      console.log('test')

      // this.props.history.push('/')
    })
  }

  handleChange = async (event) => {
    try {
      const target = event.target;
      const value = target.checked;
      const name = target.id;
      // console.log('user tracker array', this.state.user.challenges[0].tracker);
      let challengeTracker = this.props.challenge.tracker;
      // console.log('challengeTracker', challengeTracker);
      let index = target.id;
      // console.log('challengeDay', this.state.challengeDay);
      if (event.target.id <= this.state.challengeDay) {
        if (challengeTracker[index] === 0) {
          challengeTracker[index]++;
        } else if (challengeTracker[index] === 1) {
          challengeTracker[index]++;
        } else {
          challengeTracker[index]--;
        }
        // console.log('challenge tracker after click', challengeTracker);
        // console.log('state after click', this.state);
        this.setState({
          [name]: value,
        });
        let userId = this.state.user._id;
        const updatedUser = await axios.put(`/users/${userId}`, {
          challenges: this.state.user.challenges,
          rewards: this.state.user.rewards,
        });
      }
      } catch (error) {
        console.log(error);
      }
  };

  componentDidMount() {
    const challengeDay = this.props.calculateChallengeDay(this.props.challenge.startDate);
    // console.log({challengeDay});
    this.setState({
      challengeDay: challengeDay,
    })
    
  }

  render() {
    // console.log('props from preview ');
    return (
      <div className="active-preview">
        <div className="preview-title">
          <h5>{this.props.challenge.id.title}</h5>
        </div>
        <p>{this.props.challenge.id.goal}</p>
        <p>
          {this.props.challenge.id.dailyTarget.description}{' '}
          {this.props.challenge.id.dailyTarget.number}{' '}
          {this.props.challenge.id.dailyTarget.unit}
        </p>
        <p>
          Today: <TrackerButton
            index={this.state.challengeDay}
            user={this.props.user}
            handleChange={this.handleChange}
            challenge={this.props.challenge}
            challengeDay={this.state.challengeDay}
          />
          </p>
        {this.state.activeChallengeDetails && (
          <ActiveChallengeDetails
            challenge={this.props.challenge}
            user={this.props.user}
            challengeDay={this.state.challengeDay}
            calculateChallengeDay={this.props.calculateChallengeDay}
            streakStatus={this.props.streakStatus}
          />
        )}
        {!this.state.activeChallengeDetails && <button className="button-light" onClick={this.toggleChallengeDetails}>show details</button>}
        {this.state.activeChallengeDetails && <button className="button-light" onClick={this.toggleChallengeDetails}>hide details</button>}
        {this.state.activeChallengeDetails && <button className="button-light" onClick={this.withdrawFromChallenge}>i give up, i'm a bit fat looser</button>}

      </div>
    );

  }
}

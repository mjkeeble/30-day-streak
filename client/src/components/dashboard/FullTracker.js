import React, { Component } from 'react';
import axios from 'axios';
import './Dashboard.css';
import TrackerButton from './TrackerButton';

export default class FullTracker extends Component {
  state = {
    user: '',
  };

  initialSetupTracker = () => {
    let tracker = this.props.challenge.tracker;
    for (let i = 0; i < tracker.length; i++) {
      let indexToString = i.toString();
      let trackerValue = tracker[i];
      this.setState({
        [indexToString]: trackerValue,
      });
    }
  };

  handleChange = async (event) => {
    try {
      const target = event.target;
      const value = target.checked;
      const name = target.id;
      // console.log('user tracker array', this.state.user.challenges[0].tracker);
      let challengeTracker = this.props.challenge.tracker;
      let index = target.id;
      
      const streakStatusData = this.props.streakStatus(this.props.challenge.tracker, this.props.challengeDay)
      const generateNotifications = this.props.notifier(streakStatusData)

      if (event.target.id < this.props.challengeDay) {
        // challengeTracker[index] = (challengeTracker[index]++) % 3
        if (challengeTracker[index] === 0) {
          challengeTracker[index]++;
        } else if (challengeTracker[index] === 1) {
          challengeTracker[index]++;
        } else {
          challengeTracker[index]--;
          // challengeTracker[index]--;
        }
        // console.log('challenge tracker after click', challengeTracker);
        // console.log('state after click', this.state);
        this.setState({
          [name]: value,
        });
        let userId = this.state.user._id;
        const updatedUser = await axios.put(`/api/users/${userId}`, {
          challenges: this.state.user.challenges,
          rewards: this.state.user.rewards,
        });

        const refresh = this.props.refreshActiveChallengeDetails();
        const streakStatusData = this.props.streakStatus(
          this.props.challenge.tracker,
          this.props.challengeDay
        );
        const generateNotifications = this.props.notifier(streakStatusData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    this.setState({
      user: this.props.user,
    });
  };

  render() {
    let challengeTracker = this.props.challenge.tracker;
    return (
      <div className="full-tracker">
        <p>Click on a day to update the tracker</p>

        <div className="full-tracker-grid">
          <div className="set-of-five-checkboxes">
            <TrackerButton
              index="0"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
            <TrackerButton
              index="1"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
            <TrackerButton
              index="2"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
            <TrackerButton
              index="3"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
            <TrackerButton
              index="4"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />

            <TrackerButton
              index="5"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
            <TrackerButton
              index="6"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
          </div>

          <div className="set-of-five-checkboxes">
            <TrackerButton
              index="7"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
            <TrackerButton
              index="8"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
            <TrackerButton
              index="9"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />

            <TrackerButton
              index="10"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
            <TrackerButton
              index="11"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
            <TrackerButton
              index="12"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
            <TrackerButton
              index="13"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
          </div>

          <div className="set-of-five-checkboxes">
            <TrackerButton
              index="14"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />

            <TrackerButton
              index="15"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
            <TrackerButton
              index="16"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
            <TrackerButton
              index="17"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
            <TrackerButton
              index="18"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
            <TrackerButton
              index="19"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />

            <TrackerButton
              index="20"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
          </div>

          <div className="set-of-five-checkboxes">
            <TrackerButton
              index="21"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />

            <TrackerButton
              index="22"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
            <TrackerButton
              index="23"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
            <TrackerButton
              index="24"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />

            <TrackerButton
              index="25"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
            <TrackerButton
              index="26"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
            <TrackerButton
              index="27"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
          </div>

          <div className="set-of-five-checkboxes">
            <TrackerButton
              index="28"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
            <TrackerButton
              index="29"
              user={this.props.user}
              handleChange={this.handleChange}
              challenge={this.props.challenge}
            />
          </div>
        </div>
      </div>
    );
  }
}

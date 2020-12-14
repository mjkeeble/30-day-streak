import React, { Component } from 'react';
import axios from 'axios';
import './OneChallenge.css';
import {Link} from 'react-router-dom';


export default class OneChallenge extends Component {

  state = {
    favorite: false,
  }

  toggleFavorite = () => {
    const newFavorite = !this.state.favorite;
    // change state
    this.setState({ 
      favorite: newFavorite
    });
    // update database
    const challengeID = this.props.challenge._id;
    axios.put(`/users/${challengeID}/status`, {
      favorite: newFavorite
    })
    this.props.getData()
  }

  initialSetUp = () => {
    const foundInUserFavorites = this.props.user.challenges.some(challenge => {
      return challenge.id === this.props.challenge._id && challenge.status === 'favorite'
    })

    this.setState({ 
      favorite: foundInUserFavorites,
    })
  }

  componentDidMount() {
    this.initialSetUp()
  }

  render() {
    // console.log(this.props);
    return (
      <>
      {/* <div class="container center"> */}
        <div className="card" key={ this.props.challenge._id }>
          <p>{ this.props.challenge.category }</p>
          <h2>{ this.props.challenge.title }</h2>
          <hr/>
          <p>{ this.props.challenge.goal }</p>
          <img src={this.state.favorite ? '/images/favorite.png' : '/images/unfavorite.png'} style={{width: "50px"}} onClick={ this.toggleFavorite } alt="favorite" />
          <Link to={`/challenges/${this.props.challenge._id}/start`}><button>Start</button></Link>
        </div>
      {/* </div> */}
    </>
    )
  }
}


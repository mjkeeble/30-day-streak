import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Filter from '../filter/Filter';
import OneReward from './OneReward';
import CreateReward from './CreateReward';
import '../challenges/Challenges.css';

export default class Rewards extends Component {

  state = {
    rewards: [],
    //filter
    searchFilter: '',
    categoryFilter: '',
    favoritesFilter: false,
  }

  getRewards = () => {
    axios.get('/api/rewards')
      .then(response => {
        this.setState({
          rewards: response.data
        })
      })
      .catch(err => console.log(err))
  }

  setFilter = (name, value) => {
    this.setState({ [name]: value })
  }

  filter = () => {
    const favoriteIds = this.props.user.rewards.map(reward => reward._id)

    if (this.state.favoritesFilter) {
      console.log('here')
      console.log('0', this.state.rewards)
      return this.state.rewards.filter(reward => { 
        console.log('FAV', favoriteIds, 'ID',reward._id, "?", favoriteIds.includes(reward._id))

        return favoriteIds.includes(reward._id)
      })
    } else {
      console.log('1', this.state.rewards)
      return this.state.rewards.filter(reward => { 
        // search bar filter
        return `${reward.name}${reward.description}`.toLowerCase().includes(this.state.searchFilter.toLowerCase()) &&
        // categories filter
        (this.state.categoryFilter === reward.category || !this.state.categoryFilter)
      })
    }
  }

  componentDidMount() {
    this.getRewards();
  }

  render() {
    const filtered = this.filter();
    console.log('filtered', filtered)
    console.log('2', this.state.rewards)


    const categories = this.state.rewards.map(reward => { return reward.category})
    .filter((category, index, array) => { return array.indexOf(category) === index })

    return (
      <div>
        <div className="tool-bar">
          <Filter 
            categories={ categories }
            setFilter={ this.setFilter }
          />
          <Link to="/rewards/create"><img src="/images/plus.png" /></Link>
        </div>
        
        {/* <CreateReward {...this.props} forceRewardListUpdate={this.getData}/> */}
        <div className="challenges-container">
          { 
            filtered.map(reward => {
              return (
                <div key={reward._id}>
                  <OneReward
                    reward={ reward }
                    user={ this.props.user}
                    filtered={ filtered }
                    getRewards={ this.getRewards }
                    setUser={ this.props.setUser }
                    // toggleFavoriteReward = { this.props.toggleFavoriteReward }
                  />
                </div>
              ) 
            })
          }
        </div>
      </div>
    )
  }
}
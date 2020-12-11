const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: { 
    type: String,
    required: true,
    unique: true,
  },
  password: { 
    type: String,
    required: true,
  },
  email: { 
    type: String,
    required: true,
    unique: true,
  },
  googleId: String,
  firstName: String,
  lastName: String,
  challenges: [{
    id: { 
      type: Schema.Types.ObjectId, ref: 'Challenge' 
    },
    status: { 
      type: String,
      eNum: ['active', 'favorite', 'completed', 'withdrawn']
    },
    tracker: [{
      day: Number,
      reachedTarget: Boolean,
    }],
    startDate: Date,
    grandPrize: String
  }],
  rewards: [{type: Schema.Types.ObjectId, ref: 'Reward'}]
});

const User = mongoose.model('User', userSchema);
module.exports = User;
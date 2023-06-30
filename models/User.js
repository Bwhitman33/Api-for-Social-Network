const { Schema, model } = require('mongoose');

// sets schema for the User Model
const UserSchema = new Schema({
    username: {
        type: String,
        required: true, 
        unique: true,
        trim: true
    },
    email:  {
        type: String, 
        required: true, 
        unique: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

// creates the user model given the schema
const User = model('User', UserSchema);

// uses getter to obtain total array of "friends" field
UserSchema.virtual('friendAmount').get(function() {
    return this.friends.length;
});

module.exports = User;
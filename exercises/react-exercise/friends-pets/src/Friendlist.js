import React from 'react';
import Friend from './Friend'

const Friendslist = (props) => {
    const mappedFriends = props.friends.map(friend => {
        return (
            <Friend  name={friend.name} age={friend.age} pets={friend.pet}/>
        )
    })
    return (
        <div>
             { mappedFriends }
        </div>
    )
}

export default Friendslist;